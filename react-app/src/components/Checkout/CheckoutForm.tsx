import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Imports from src
import OrderReview from './OrderReview';
import { createOrder } from '../../store/order/actions';
import { IAddress } from '../../models/address';
import { IOrderToCreate } from '../../models/order';
import { payWithStripe } from '../../store/payment/actions';

const testingValues: IAddress = {
    firstName: 'a',
    lastName: 'a',
    companyName: 'a',
    email: 'abcd@test.com',
    phoneNumber: 'a',
    country: 'a',
    city: 'a',
    state: 'a',
    street: 'a',
    homeNumber: 'a',
    zipCode: 'a',
};

const CheckoutForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [shippingId, setShippingId] = useState(1);
    const [paymentId, setPaymentId] = useState(1);

    const { register, handleSubmit, errors } = useForm<IAddress>({
        defaultValues: testingValues,
    });

    const onSubmit = async (shipToAddress: IAddress) => {
        const order: IOrderToCreate = {
            shippingId,
            paymentId,
            shipToAddress,
        };

        if (paymentId === 3) {
            dispatch(payWithStripe(order));
        } else {
            dispatch(createOrder(order, history));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="checkout__form">
            <h3 className="checkout__form-title">Shipping details</h3>

            {/* First name */}
            <label htmlFor="firstName" className="basic-input__label">
                Name
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>

            <div className="checkout__form-group">
                <input
                    id="firstName"
                    name="firstName"
                    ref={register({ required: true })}
                    className={`basic-input ${
                        errors.firstName && 'basic-input--required'
                    }`}
                    placeholder="First name"
                    type="text"
                />

                {/* Last name */}
                <input
                    id="lastName"
                    name="lastName"
                    ref={register({ required: true })}
                    className={`basic-input ${
                        errors.lastName && 'basic-input--required'
                    }`}
                    placeholder="Last name"
                    type="text"
                />
            </div>

            {/* Company name */}
            <label htmlFor="companyName" className="basic-input__label">
                Company name
            </label>
            <input
                id="companyName"
                name="companyName"
                ref={register}
                className="basic-input"
                type="text"
            />

            {/* Country */}
            <label htmlFor="country" className="basic-input__label">
                Country
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="country"
                name="country"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.country && 'basic-input--required'
                }`}
                type="text"
            />

            {/* Street */}
            <label htmlFor="street" className="basic-input__label">
                Street
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="street"
                name="street"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.street && 'basic-input--required'
                }`}
                type="text"
            />

            {/* Home number */}
            <label htmlFor="homeNumber" className="basic-input__label">
                House number
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="homeNumber"
                name="homeNumber"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.homeNumber && 'basic-input--required'
                }`}
                type="text"
            />

            {/* City */}
            <label htmlFor="city" className="basic-input__label">
                City
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="city"
                name="city"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.city && 'basic-input--required'
                }`}
                type="text"
            />

            {/* State */}
            <label htmlFor="state" className="basic-input__label">
                State
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="state"
                name="state"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.state && 'basic-input--required'
                }`}
                type="text"
            />

            {/* Post code */}
            <label htmlFor="zipCode" className="basic-input__label">
                Postcode
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="zipCode"
                name="zipCode"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.zipCode && 'basic-input--required'
                }`}
                type="text"
            />

            {/* Phone */}
            <label htmlFor="phoneNumber" className="basic-input__label">
                Phone
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.phoneNumber && 'basic-input--required'
                }`}
                type="text"
            />

            {/* Email address */}
            <label htmlFor="email" className="basic-input__label">
                Email address
                <abbr className="required" title="required">
                    *
                </abbr>
            </label>
            <input
                id="email"
                name="email"
                ref={register({ required: true })}
                className={`basic-input ${
                    errors.email && 'basic-input--required'
                }`}
                type="email"
            />

            {/* Order notes */}
            <label htmlFor="notes" className="basic-input__label">
                Order notes
            </label>
            <textarea
                id="notes"
                name="notes"
                ref={register}
                className="basic-input"
                placeholder="Notes about your order, e.g. special notes for delivery"
            />

            <hr className="checkout__divider" />

            <h3 className="checkout__form-title">Your order</h3>

            <OrderReview
                setShippingId={setShippingId}
                setPaymentId={setPaymentId}
                shippingId={shippingId}
                paymentId={paymentId}
            />
        </form>
    );
};

export default CheckoutForm;
