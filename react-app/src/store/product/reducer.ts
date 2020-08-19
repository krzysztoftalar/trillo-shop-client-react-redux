import { Reducer } from 'redux';
// import types
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    ProductActionTypes,
    ProductState,
    SET_PAGE,
    SET_PREDICATE,
} from './types';

export const INITIAL_STATE: ProductState = {
    products: [],
    product: null,
    productsCount: 0,
    predicate: { key: '', value: '' },
    pageIndex: 0,
};

export const ProductReducer: Reducer<ProductState, ProductActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            const { products, productsCount } = action.payload;
            return {
                ...state,
                products,
                productsCount,
            };
        }

        case GET_PRODUCT:
            return { ...state, product: action.payload };

        case SET_PREDICATE: {
            const { key, value } = action.payload;

            return {
                ...state,
                products: [],
                predicate: { ...state.predicate, key, value },
                pageIndex: 0,
            };
        }

        case SET_PAGE:
            return { ...state, pageIndex: action.payload };

        default:
            return state;
    }
};
