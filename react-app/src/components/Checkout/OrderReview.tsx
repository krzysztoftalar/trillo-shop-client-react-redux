import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { selectCartState } from '../../store/cart/selectors';
import { getDeliveryMethods } from '../../store/delivery/actions';
import { selectDeliveryState } from '../../store/delivery/selectors';
import { getPaymentMethods } from '../../store/payment/actions';
import { selectPaymentState } from '../../store/payment/selectors';
import { updateTotalValue } from '../../store/cart/action';
import ButtonIndicator from '../Forms/ButtonIndicator';
import { selectLoader } from '../../store/ui/selectors';
import { PAY_WITH_STRIPE } from '../../store/payment/types';

interface IProps {
    setShippingId: (id: number) => void;
    setPaymentId: (id: number) => void;
    shippingId: number;
    paymentId: number;
}

const OrderReview: React.FC<IProps> = ({
    setShippingId,
    setPaymentId,
    shippingId,
    paymentId,
}): JSX.Element => {
    const dispatch = useDispatch();
    const { cart, totalValue } = useSelector(selectCartState());
    const { deliveryMethods } = useSelector(selectDeliveryState());
    const { paymentMethods } = useSelector(selectPaymentState());

    useEffect(() => {
        dispatch(getDeliveryMethods());
        dispatch(getPaymentMethods());
    }, [dispatch]);

    useEffect(() => {
        if (deliveryMethods.length > 0 && paymentMethods.length > 0) {
            setShippingId(deliveryMethods[0].id);
            setPaymentId(paymentMethods[0].id);
        }
    }, [deliveryMethods, paymentMethods, setPaymentId, setShippingId]);

    const onShippingChange = (id: number) => {
        setShippingId(id);

        if (id !== shippingId) {
            dispatch(
                updateTotalValue(
                    deliveryMethods.find((x) => x.id === id)!.price
                )
            );
        }
    };

    const onPaymentChange = (id: number) => {
        setPaymentId(id);
    };

    const submitting = useSelector(selectLoader(PAY_WITH_STRIPE));

    return (
        <div className="checkout__review">
            <h3>Product</h3>

            {/* Cart products */}
            <div>
                {cart.map((item) => {
                    const hasColor = item.productColor !== null;
                    const hasSize = item.productSize !== null;

                    return (
                        <div
                            className="checkout__review-item"
                            key={item.stockId}
                        >
                            <span className="checkout__review-item-name">
                                {item.productName}

                                {(hasColor || hasSize) && (
                                    <div className="smallCart__variation-box">
                                        {hasSize && (
                                            <>
                                                <p>Size:</p>
                                                <p>{item.productSize}</p>
                                            </>
                                        )}

                                        {hasSize && hasColor && <p>&#124;</p>}

                                        {hasColor && (
                                            <>
                                                <p>Color:</p>
                                                <p
                                                    className="smallCart__color"
                                                    style={{
                                                        backgroundColor:
                                                            item.productColor,
                                                    }}
                                                />
                                            </>
                                        )}
                                    </div>
                                )}
                            </span>

                            <span className="checkout__review-item-qty">
                                x{item.quantity}
                            </span>

                            <span className="checkout__review-item-price">
                                ${item.price}
                            </span>
                        </div>
                    );
                })}

                <hr className="checkout__divider" />
            </div>

            {/* Shipping methods */}
            <div className="checkout__shipping">
                <h3>Shipping</h3>

                <div className="checkout__shipping-row">
                    {deliveryMethods.map((item) => {
                        const hasPrice = item.price !== 0;

                        return (
                            <div key={item.id}>
                                <input
                                    id={item.name}
                                    name={item.name}
                                    className="checkbox__input"
                                    type="checkbox"
                                    checked={shippingId === item.id}
                                    onChange={() => onShippingChange(item.id)}
                                />
                                <label
                                    htmlFor={item.name}
                                    className="checkbox__label"
                                >
                                    <span className="checkbox__btn" />
                                    {item.name}
                                    {hasPrice && `: $${item.price}`}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <hr className="checkout__divider" />
            </div>

            {/* Total order value */}
            <h3>Total</h3>

            <span className="checkout__review-total">${totalValue}</span>

            <hr className="checkout__divider" />

            {/* Payment methods */}
            <h3>Payment</h3>

            <div className="checkout__payment">
                {paymentMethods.map((item, index) => {
                    const checked = paymentId === item.id;
                    const lastItem = paymentMethods.length - 1 === index;

                    return (
                        <div key={item.id}>
                            <input
                                id={item.name}
                                name={item.name}
                                className="checkbox__input"
                                type="checkbox"
                                checked={checked}
                                onChange={() => onPaymentChange(item.id)}
                            />
                            <label
                                htmlFor={item.name}
                                className="checkbox__label"
                            >
                                <span className="checkbox__btn" />
                                {item.name}
                            </label>

                            <p
                                className={`checkout__payment-desc ${
                                    checked ? 'showAccordion' : 'hideAccordion'
                                }`}
                            >
                                {item.description}
                            </p>

                            <hr
                                className={`checkout__divider ${
                                    lastItem && 'u-display-none'
                                }`}
                            />
                        </div>
                    );
                })}

                <p className="checkout__policy">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                </p>

                {/* Submit form button */}
                <button
                    className="btn-submit"
                    disabled={submitting}
                    type="submit"
                >
                    {submitting ? (
                        <ButtonIndicator />
                    ) : paymentId === 3 ? (
                        'Proceed to payment'
                    ) : (
                        'Place order'
                    )}
                </button>
            </div>
        </div>
    );
};

export default OrderReview;
