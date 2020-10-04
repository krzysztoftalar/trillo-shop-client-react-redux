import { Action } from 'redux';
// Imports from src
import { IProduct, IProductsEnvelope } from '../../models/product';

export * from '../../models/product';

export interface ProductState {
    products: IProduct[];
    promoProducts: IProduct[];
    featuredProducts: IProduct[];
    product: IProduct | null;
    productsCount: number;
    params: { [key: string]: string }[];
    pageIndex: number;
}

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_PREDICATE = 'SET_PREDICATE';
export const SET_PAGE = 'SET_PAGE';
export const ITEMS_PER_PAGE = 10;

export interface GetProductsAction extends Action {
    type: typeof GET_PRODUCTS;
    payload: { products: IProductsEnvelope; type?: string };
}

export interface GetProductAction extends Action {
    type: typeof GET_PRODUCT;
    payload: IProduct;
}

export interface SetPredicateAction extends Action {
    type: typeof SET_PREDICATE;
    payload: { key: string; value: string };
}

export interface SetPageAction extends Action {
    type: typeof SET_PAGE;
    payload: number;
}

export type ProductActionTypes =
    | GetProductsAction
    | GetProductAction
    | SetPredicateAction
    | SetPageAction;
