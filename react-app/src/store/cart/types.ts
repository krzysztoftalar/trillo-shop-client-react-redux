import { Action } from 'redux';
// Imports from src
import { ICart, ICartEnvelope } from '../../models/cart';

export * from '../../models/cart';

export interface CartState {
    cart: ICart[];
    totalQty: number;
    totalValue: number;
}

export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface GetCartAction extends Action {
    type: typeof GET_CART;
    payload: ICartEnvelope;
}

export interface AddToCartAction extends Action {
    type: typeof ADD_TO_CART;
    payload: { quantity: number };
}
export interface RemoveFromCartAction extends Action {
    type: typeof REMOVE_FROM_CART;
    payload: { quantity: number };
}

export type CartActionTypes =
    | AddToCartAction
    | GetCartAction
    | RemoveFromCartAction;
