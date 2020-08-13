import React from 'react';

const PromoSection = (): JSX.Element => {
    return (
        <>
            <div className="promo__left-item">
                <p className="promo__text">Free Shipping On International Orders Over $100</p>
                <a href="/" className="promo__link">
                    More info here
                </a>
            </div>

            <div className="promo__right-item">
                <p className="promo__text">Open For Business: The Fall/Winter Shop</p>
                <a href="/" className="promo__link">
                    Explore now
                </a>
            </div>
        </>
    );
};

export default PromoSection;
