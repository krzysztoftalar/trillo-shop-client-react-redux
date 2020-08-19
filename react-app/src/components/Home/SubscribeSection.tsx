import React from 'react';
// Imports from src
import ProductCardBig from '../ProductCard/ProductCardBig';
import products from '../../app/data/products';

const SubscribeSection = (): JSX.Element => {
    const renderSubscribeForm = (prop?: string) => (
        <div className={`subscribe ${prop}`}>
            <h2 className="subscribe__title">Join our list</h2>

            <p className="subscribe__description">
                Signup to be the first to hear about exclusive deals,
                <br className="u-display-none-m" /> special offers and upcoming collections
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
                <ProductCardBig product={products[0]} />
            </div>

            <div className="subscribe__right-card">
                <div className="subscribe__right-card-wrapper">
                    <ProductCardBig product={products[1]} />
                </div>

                {renderSubscribeForm(' u-display-none-s')}
            </div>

            <div className="subscribe__form-wrapper">{renderSubscribeForm()}</div>
        </>
    );
};

export default SubscribeSection;
