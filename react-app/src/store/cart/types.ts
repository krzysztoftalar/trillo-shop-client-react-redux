import { Action } from 'redux';
// Imports from src
import { ICart, ICartEnvelope } from '../../models/cart';

export * from '../../models/cart';

export interface CartState {
    cart: ICart[];
    totalQty: number;
    totalValue: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';

export interface AddToCartAction extends Action {
    type: typeof ADD_TO_CART;
    payload: { quantity: number };
}

export interface GetCartAction extends Action {
    type: typeof GET_CART;
    payload: ICartEnvelope;
}

export type CartActionTypes = AddToCartAction | GetCartAction;
