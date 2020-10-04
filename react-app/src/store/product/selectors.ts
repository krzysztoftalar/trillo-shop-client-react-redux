import { createSelector } from 'reselect';
// Imports form src
import { RootState } from '../rootState';
import { ProductState } from './types';

export const getProductState = (state: RootState): ProductState =>
    state.product;

export const selectProducts = () =>
    createSelector([getProductState], (product) => product.products);

export const selectFeaturedProducts = () =>
    createSelector([getProductState], (product) => product.featuredProducts);

export const selectPromoProducts = () =>
    createSelector([getProductState], (product) => product.promoProducts);
