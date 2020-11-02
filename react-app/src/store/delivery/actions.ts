import { ThunkResult } from '../../app/helpers/reduxHelpers';
import agent, { errorResponse } from '../../app/api/agent';
import { GET_DELIVERY_METHODS } from './types';
import { errorAction } from '../error/action';
import { startAction, stopAction } from '../ui/action';

export const getDeliveryMethods = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(GET_DELIVERY_METHODS));

    try {
        const delivery = await agent.Delivery.list();
        dispatch({ type: GET_DELIVERY_METHODS, payload: delivery });
    } catch (error) {
        dispatch(errorAction(GET_DELIVERY_METHODS, errorResponse(error)));
    } finally {
        dispatch(stopAction(GET_DELIVERY_METHODS));
    }
};
