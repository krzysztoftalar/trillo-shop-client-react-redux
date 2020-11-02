import { Reducer } from 'redux';
// Imports from src
import { GET_PAYMENT_METHODS, PaymentActionTypes, PaymentState } from './types';

export const INITIAL_STATE: PaymentState = {
    paymentMethods: [],
};

export const PaymentReducer: Reducer<PaymentState, PaymentActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_PAYMENT_METHODS:
            return {
                ...state,
                paymentMethods: action.payload,
            };

        default:
            return state;
    }
};
