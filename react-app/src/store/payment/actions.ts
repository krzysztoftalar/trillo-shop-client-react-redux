import { loadStripe } from '@stripe/stripe-js/pure';
// Imports from src
import { ThunkResult } from '../../app/helpers/reduxHelpers';
import agent, { errorResponse } from '../../app/api/agent';
import { GET_PAYMENT_METHODS, PAY_WITH_STRIPE } from './types';
import { errorAction } from '../error/action';
import { startAction, stopAction } from '../ui/action';
import { IOrderToCreate } from '../../models/order';

export const getPaymentMethods = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(GET_PAYMENT_METHODS));

    try {
        const payments = await agent.Payment.list();
        dispatch({ type: GET_PAYMENT_METHODS, payload: payments });
    } catch (error) {
        dispatch(errorAction(GET_PAYMENT_METHODS, errorResponse(error)));
    } finally {
        dispatch(stopAction(GET_PAYMENT_METHODS));
    }
};

export const payWithStripe = (order: IOrderToCreate): ThunkResult => async (
    dispatch
) => {
    dispatch(startAction(PAY_WITH_STRIPE));

    const stripePromise = loadStripe(
        'pk_test_XekBDuUTsqK2y3u8ETkTsg9k007BGBHrUK'
    );

    const stripe = await stripePromise;
    const { sessionId } = await agent.Payment.createSession(order);

    try {
        if (stripe) {
            const { error } = await stripe.redirectToCheckout({
                sessionId,
            });

            if (error.message) {
                dispatch(errorAction(PAY_WITH_STRIPE, error.message));
            }
        }
    } finally {
        dispatch(stopAction(PAY_WITH_STRIPE));
    }
};
