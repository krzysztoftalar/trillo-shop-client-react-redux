import React from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

const WishlistBtn = (): JSX.Element => {
    return (
        <div className="social-pill">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <svg className="social-pill__icon">
                    <use xlinkHref={`${svg}#icon-heart`} />
                </svg>
            </a>
        </div>
    );
};

export default WishlistBtn;
