import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Imports from src
import Dropdown from '../../Dropdown/Dropdown';
import { ICart } from '../../../models/cart';
import svg from '../../../assets/img/sprite.svg';
import { addToCart, removeFromCart } from '../../../store/cart/action';
import calcQtyOptions from '../../../app/helpers/calculateQuantity';

interface IProps {
    item: ICart;
}

const SmallCartItems: React.FC<IProps> = ({ item }) => {
    const dispatch = useDispatch();

    const { options, index } = calcQtyOptions(item.quantity);
    const [current, setCurrent] = useState<{ id: number; value: string }>(
        options[index]
    );

    const onQtyChange = (qty: { id: number; value: string }) => {
        setCurrent(qty);
        const newQty = Number(qty.value);

        if (item.quantity < newQty) {
            const quantity = newQty - item.quantity;
            dispatch(addToCart(item.stockId, quantity));
        } else if (item.quantity > newQty) {
            const quantity = item.quantity - newQty;
            dispatch(removeFromCart(item.stockId, quantity));
        }
    };

    // Check if cart item has color or size
    const hasColor = item.productColor !== null;
    const hasSize = item.productSize !== null;

    const onDelete = () => {
        const { quantity } = item;
        dispatch(removeFromCart(item.stockId, quantity));
    };

    return (
        <div className="smallCart__item">
            <a href="/" className="smallCart__img">
                <img src={item.photoUrl} alt="Product" />
            </a>

            <div className="smallCart__summary-box">
                <div className="smallCart__header-box">
                    <a href="/" className="smallCart__title">
                        {item.productName}
                    </a>
                    <button
                        onClick={() => onDelete()}
                        className="smallCart__btn-delete"
                        type="button"
                    >
                        <svg className="smallCart__btn-delete-icon">
                            <use xlinkHref={`${svg}#icon-cancel-circle`} />
                        </svg>
                    </button>
                </div>

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
                                        backgroundColor: item.productColor,
                                    }}
                                />
                            </>
                        )}
                    </div>
                )}

                <div className="smallCart__qty-box">
                    <span className="smallCart__qty">Qty</span>

                    <Dropdown
                        options={calcQtyOptions(Number(current.value)).options}
                        setCurrent={onQtyChange}
                        current={current}
                    />
                    <span className="smallCart__item-price">${item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default SmallCartItems;
