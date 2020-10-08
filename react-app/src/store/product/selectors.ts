import { createSelector } from 'reselect';
// Imports form src
import { RootState } from '../rootState';
import { ProductState } from './types';

export const getProductState = (state: RootState): ProductState =>
    state.product;

export const selectProductState = () =>
    createSelector([getProductState], (product) => product);
