import { createSelector } from 'reselect';
// Imports from src
import { RootState } from '../rootState';
import { PaymentState } from './types';

export const selectPayment = (state: RootState): PaymentState => state.payment;

export const selectPaymentState = () =>
    createSelector([selectPayment], (payment) => payment);
