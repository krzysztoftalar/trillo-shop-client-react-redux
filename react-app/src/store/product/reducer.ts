import { Reducer } from "redux";
// import types
import { GET_PRODUCT, GET_PRODUCTS, ProductActionTypes, ProductState, SET_PAGE, SET_PREDICATE } from "./types";

export const INITIAL_STATE: ProductState = {
    products: [],
    product: null,
    productsCount: 0,
    predicate: new Map(),
    pageIndex: 0,
}

export const ProductReducer: Reducer<ProductState, ProductActionTypes> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PREDICATE:
            const {predicate, value} = action.payload

            if (predicate !== 'All') {
                return {
                    ...state,
                    predicate: new Map().set(predicate, value),
                    pageIndex: 0,
                    products: []
                }
            } else {
                return {...state}
            }

        case SET_PAGE:
            return {...state, pageIndex: action.payload}

        case GET_PRODUCTS:
            const {products, productsCount} = action.payload
            return {...state, products: products, productsCount: productsCount}

        case GET_PRODUCT:
            return {...state, product: action.payload}

        default:
            return state
    }
}

