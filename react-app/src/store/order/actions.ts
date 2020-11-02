import { ThunkResult } from '../../app/helpers/reduxHelpers';
import { startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';
import { resetCart } from '../cart/action';
import agent, { errorResponse } from '../../app/api/agent';
import { IOrderToCreate } from '../../models/order';
import { CREATE_ORDER } from './types';

export const createOrder = (order: IOrderToCreate): ThunkResult => async (
    dispatch
) => {
    dispatch(startAction(CREATE_ORDER));

    try {
        await agent.Orders.create(order);
    } catch (error) {
        dispatch(errorAction(CREATE_ORDER, errorResponse(error)));
    } finally {
        dispatch(stopAction(CREATE_ORDER));
        // dispatch(resetCart());
    }
};
