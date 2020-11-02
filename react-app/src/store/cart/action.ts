import agent, { errorResponse } from '../../app/api/agent';
import { ThunkResult } from '../../app/helpers/reduxHelpers';
import { startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';
import {
    ADD_TO_CART,
    GET_CART,
    REMOVE_FROM_CART,
    RESET_CART,
    ResetCartAction,
    UPDATE_TOTAL_VALUE,
    UpdateTotalValueAction,
} from './types';

export const getCart = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(GET_CART));

    try {
        const cart = await agent.Cart.getCart();
        dispatch({ type: GET_CART, payload: cart });
    } catch (error) {
        dispatch(errorAction(GET_CART, errorResponse(error)));
    } finally {
        dispatch(stopAction(GET_CART));
    }
};

export const addToCart = (
    stockId: number,
    quantity: number
): ThunkResult => async (dispatch) => {
    dispatch(startAction(ADD_TO_CART));

    try {
        await agent.Cart.addToCart(stockId, quantity);
        dispatch({ type: ADD_TO_CART, payload: { quantity } });
    } catch (error) {
        dispatch(errorAction(ADD_TO_CART, errorResponse(error)));
    } finally {
        dispatch(stopAction(ADD_TO_CART));
        dispatch(getCart());
    }
};

export const removeFromCart = (
    stockId: number,
    quantity: number
): ThunkResult => async (dispatch) => {
    dispatch(startAction(REMOVE_FROM_CART));

    try {
        await agent.Cart.removeFromCart(stockId, quantity);
        dispatch({ type: REMOVE_FROM_CART, payload: { quantity } });
    } catch (error) {
        dispatch(errorAction(REMOVE_FROM_CART, errorResponse(error)));
    } finally {
        dispatch(stopAction(REMOVE_FROM_CART));
        dispatch(getCart());
    }
};

export const updateTotalValue = (value: number): UpdateTotalValueAction => ({
    type: UPDATE_TOTAL_VALUE,
    payload: value,
});

export const resetCart = (): ResetCartAction => ({
    type: RESET_CART,
});
