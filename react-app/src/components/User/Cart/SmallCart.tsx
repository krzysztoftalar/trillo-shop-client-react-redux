import React from 'react';
import { useSelector } from 'react-redux';
// Imports from src
import { selectCartState } from '../../../store/cart/selectors';
import svg from '../../../assets/img/sprite.svg';
import SmallCartItems from './SmallCartItems';

const SmallCart = (): JSX.Element => {
    const { cart, totalValue } = useSelector(selectCartState());

    if (cart.length === 0) {
        return (
            <div className="smallCart__empty">
                <p className="smallCart__empty-text">
                    <svg className="smallCart__empty-icon">
                        <use xlinkHref={`${svg}#icon-shopping-bag`} />
                    </svg>
                    No products in the cart.
                </p>
            </div>
        );
    }

    return (
        <div className="smallCart">
            {cart.map((item) => (
                <SmallCartItems key={item.stockId} item={item} />
            ))}

            <span className="smallCart__total">
                Subtotal:
                <span>${totalValue}</span>
            </span>

            <button className="btn-transparent" type="button">
                View Cart
            </button>

            <button className="btn-submit" type="button">
                Checkout
            </button>
        </div>
    );
};

export default SmallCart;
