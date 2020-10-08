import { createSelector } from 'reselect';
// Imports form src
import { RootState } from '../rootState';
import { CartState } from './types';

export const selectCart = (state: RootState): CartState => state.cart;

export const selectCartState = () =>
    createSelector([selectCart], (cart) => cart);
