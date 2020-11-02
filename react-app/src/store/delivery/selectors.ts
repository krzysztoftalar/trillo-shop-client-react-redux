import { createSelector } from 'reselect';
// Imports from src
import { RootState } from '../rootState';
import { DeliveryState } from './types';

export const selectDelivery = (state: RootState): DeliveryState =>
    state.delivery;

export const selectDeliveryState = () =>
    createSelector([selectDelivery], (delivery) => delivery);
