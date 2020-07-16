import { Action } from "redux";

export interface IProduct {
    productId: number;
    categoryId: number;
    productName: string;
    description?: string;
    categoryName: string;
    // stock: IStock[]
}

export interface IProductsEnvelope {
    products: IProduct[];
    productsCount: number;
}

export interface ProductState {
    products: IProduct[];
    product: IProduct | null;
    productsCount: number;
    predicate: { key: string; value: string };
    pageIndex: number;
}

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const SET_PREDICATE = "SET_PREDICATE";
export const SET_PAGE = "SET_PAGE";
export const ITEMS_PER_PAGE = 10;

export interface GetProductsAction extends Action {
    type: typeof GET_PRODUCTS;
    payload: IProductsEnvelope;
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
