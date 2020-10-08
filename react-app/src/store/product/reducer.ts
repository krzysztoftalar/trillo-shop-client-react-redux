import { Reducer } from 'redux';
// Imports from src
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
    promoProducts: [],
    featuredProducts: [],
    product: null,
    productsCount: 0,
    params: [],
    pageIndex: 0,
};

export const ProductReducer: Reducer<ProductState, ProductActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            const {
                products: { products, productsCount },
                type,
            } = action.payload;

            switch (type) {
                case 'promo':
                    return {
                        ...state,
                        promoProducts: products,
                    };
                case 'featured':
                    return {
                        ...state,
                        featuredProducts: products,
                    };
                default:
                    return {
                        ...state,
                        products: products.concat(...state.products),
                        productsCount,
                    };
            }
        }

        case GET_PRODUCT:
            return { ...state, product: action.payload };

        case SET_PREDICATE: {
            const { key, value } = action.payload;

            return {
                ...state,
                params: [...state.params, { [key]: value }],
                pageIndex: 0,
            };
        }

        case SET_PAGE:
            return { ...state, pageIndex: action.payload };

        default:
            return state;
    }
};
