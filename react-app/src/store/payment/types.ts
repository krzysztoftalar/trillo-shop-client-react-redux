import { Action } from 'redux';
// Imports from src
import { IPayment } from '../../models/payment';

export interface PaymentState {
    paymentMethods: IPayment[];
}

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS';
export const PAY_WITH_STRIPE = 'PAY_WITH_STRIPE';

export interface GetPaymentMethodsAction extends Action {
    type: typeof GET_PAYMENT_METHODS;
    payload: IPayment[];
}

export type PaymentActionTypes = GetPaymentMethodsAction;
