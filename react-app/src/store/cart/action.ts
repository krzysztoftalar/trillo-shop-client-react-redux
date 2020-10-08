import agent, { errorResponse } from '../../app/api/agent';
import { ThunkResult } from '../../app/helpers/reduxHelpers';
import { startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';
import { ADD_TO_CART, GET_CART } from './types';

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
    }
};

export const getCart = (): ThunkResult => async (dispatch) => {
    try {
        const cart = await agent.Cart.getCart();
        dispatch({ type: GET_CART, payload: cart });
    } catch (error) {
        dispatch(errorAction(GET_CART, errorResponse(error)));
    } finally {
        dispatch(stopAction(GET_CART));
    }
};
