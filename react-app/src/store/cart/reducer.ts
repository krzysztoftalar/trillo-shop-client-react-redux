import { Reducer } from 'redux';
// Imports from src
import {
    CartActionTypes,
    CartState,
    GET_CART,
    RESET_CART,
    UPDATE_TOTAL_VALUE,
} from './types';

export const INITIAL_STATE: CartState = {
    cart: [],
    totalQty: 0,
    totalValue: 0,
};

export const CartReducer: Reducer<CartState, CartActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_CART: {
            const { cartProducts, totalQty, totalValue } = action.payload;

            return {
                ...state,
                cart: cartProducts,
                totalQty,
                totalValue,
            };
        }

        case UPDATE_TOTAL_VALUE: {
            const total = state.cart.reduce(
                (prev, next) => prev + next.quantity * next.price,
                0
            );

            return {
                ...state,
                totalValue: total + action.payload,
            };
        }

        case RESET_CART:
            return INITIAL_STATE;

        default:
            return state;
    }
};
