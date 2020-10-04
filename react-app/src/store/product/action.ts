import agent from '../../app/api/agent';
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    SET_PAGE,
    SET_PREDICATE,
    SetPageAction,
} from './types';
import { ThunkResult } from '../../app/helpers/reduxHelpers';
import { startAction, stopAction } from '../ui/action';
import setProductParams from '../../app/helpers/setProductParams';

export const getProducts = (
    params?: { [key: string]: string }[],
    type?: string
): ThunkResult => async (dispatch, getState) => {
    dispatch(startAction(GET_PRODUCTS));

    try {
        const { pageIndex } = getState().product;

        const products = await agent.Products.list(
            setProductParams(pageIndex, params)
        );
        dispatch({ type: GET_PRODUCTS, payload: { products, type } });
    } catch (error) {
        // dispatch(errorActionAsync(error));
    } finally {
        dispatch(stopAction(GET_PRODUCTS));
    }
};

export const getProduct = (id: number): ThunkResult => async (dispatch) => {
    dispatch(startAction(GET_PRODUCT));

    try {
        const product = await agent.Products.details(id);
        dispatch({
            type: GET_PRODUCT,
            payload: product,
        });
    } catch (error) {
        // dispatch(errorActionAsync(error));
    } finally {
        dispatch(stopAction(GET_PRODUCT));
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

    // dispatch(getProducts());
};

export const setPage = (pageIndex: number): SetPageAction => ({
    type: SET_PAGE,
    payload: pageIndex,
});
