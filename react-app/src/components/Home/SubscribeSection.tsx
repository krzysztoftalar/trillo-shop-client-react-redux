import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { getProducts } from '../../store/product/action';
import ProductCardBig from '../ProductCard/ProductCardBig';
import { selectProductState } from '../../store/product/selectors';

const SubscribeSection = (): JSX.Element => {
    // Get featured products
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts([{ predicate: 'promo' }], 'promo'));
    }, [dispatch]);

    const { promoProducts } = useSelector(selectProductState());

    const renderSubscribeForm = (prop?: string) => (
        <div className={`subscribe ${prop}`}>
            <h2 className="subscribe__title">Join our list</h2>

            <p className="subscribe__description">
                Signup to be the first to hear about exclusive deals,
                <br className="u-display-none-m" /> special offers and upcoming
                collections
            </p>

            <form action="#" className="subscribe__form">
                <input
                    className="subscribe__input"
                    type="email"
                    required
                    placeholder="Your email address"
                />
                <button className="subscribe__button" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    );

    return (
        <>
            <div className="subscribe__left-card">
                <ProductCardBig product={promoProducts[1]} />
            </div>

            <div className="subscribe__right-card">
                <div className="subscribe__right-card-wrapper">
                    <ProductCardBig product={promoProducts[0]} />
                </div>

                {renderSubscribeForm(' u-display-none-s')}
            </div>

            <div className="subscribe__form-wrapper">
                {renderSubscribeForm()}
            </div>
        </>
    );
};

export default SubscribeSection;
