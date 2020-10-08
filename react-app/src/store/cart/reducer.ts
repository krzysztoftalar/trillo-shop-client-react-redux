import { Reducer } from 'redux';
// Imports from src
import { ADD_TO_CART, CartActionTypes, CartState, GET_CART } from './types';

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
        case ADD_TO_CART: {
            const { quantity } = action.payload;

            return {
                ...state,
                totalQty: state.totalQty + quantity,
            };
        }

        case GET_CART: {
            const { cartProducts, totalQty, totalValue } = action.payload;

            return {
                ...state,
                cart: cartProducts,
                totalQty,
                totalValue,
            };
        }

        default:
            return state;
    }
};
