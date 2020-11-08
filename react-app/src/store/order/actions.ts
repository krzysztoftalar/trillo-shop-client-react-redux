import { BrowserHistory } from 'history';
// Imports from src
import { ThunkResult } from '../../app/helpers/reduxHelpers';
import { startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';
import agent, { errorResponse } from '../../app/api/agent';
import { IOrderToCreate } from '../../models/order';
import { CREATE_ORDER } from './types';

export const createOrder = (
    order: IOrderToCreate,
    history: BrowserHistory
): ThunkResult => async (dispatch) => {
    dispatch(startAction(CREATE_ORDER));

    try {
        const res = await agent.Orders.create(order);
        if (res.status === 200) {
            history.push('/orders/success');
        }
    } catch (error) {
        dispatch(errorAction(CREATE_ORDER, errorResponse(error)));
    } finally {
        dispatch(stopAction(CREATE_ORDER));
    }
};
