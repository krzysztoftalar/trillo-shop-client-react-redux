import agent from "../../app/api/agent";
import {
    errorActionAsync,
    startActionAsync,
    stopActionAsync,
} from "../asyncAction/action";
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SET_PAGE,
    SET_PREDICATE,
    SetPageAction,
} from "./types";
import setParams from "../../app/helpers/paramsHelper";
import { ThunkResult } from "../../app/helpers/reduxHelpers";

export const getProducts = (): ThunkResult => async (dispatch, getState) => {
    dispatch(startActionAsync());

    try {
        const { pageIndex, predicate } = getState().product;

        const products = await agent.Products.list(
            setParams(pageIndex, predicate)
        );
        dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
        dispatch(errorActionAsync(error));
    } finally {
        dispatch(stopActionAsync());
    }
};

export const getProduct = (id: number): ThunkResult => async (dispatch) => {
    dispatch(startActionAsync());

    try {
        const product = await agent.Products.details(id);
        dispatch({
            type: GET_PRODUCT,
            payload: product,
        });
    } catch (error) {
        dispatch(errorActionAsync(error));
    } finally {
        dispatch(stopActionAsync());
    }
};

export const setPredicate = (key: string, value: string): ThunkResult => async (
    dispatch
) => {
    dispatch({
        type: SET_PREDICATE,
        payload: {
            key,
            value,
        },
    });

    dispatch(getProducts());
};

export const setPage = (pageIndex: number): SetPageAction => ({
    type: SET_PAGE,
    payload: pageIndex,
});
