import agent from "../../app/api/agent";
import { failAction, startAction, stopAction } from "../loading/action";
import { GET_PRODUCT, GET_PRODUCTS, SET_PAGE, SET_PREDICATE, SetPage } from './types';
import { setParams } from "../../app/helpers/paramsHelper";
import { ThunkResult } from "../index";

export const setPredicate = (predicate: string, value: string): ThunkResult => (
    async (dispatch) => {
        dispatch({type: SET_PREDICATE, payload: {predicate, value}})

        dispatch(getProducts())
    })

export const setPage = (pageIndex: number): SetPage => ({
    type: SET_PAGE,
    payload: pageIndex
})

export const getProducts = (): ThunkResult =>
    async (dispatch, getState) => {
        dispatch(startAction())

        try {
            const {pageIndex, predicate} = getState().product
            const products = await agent.Products.list(setParams(pageIndex, predicate))
            dispatch({type: GET_PRODUCTS, payload: products})
        } catch (error) {
            dispatch(failAction(error))
        } finally {
            dispatch(stopAction())
        }
    }

export const getProduct = (id: number): ThunkResult => async (dispatch) => {
    dispatch(startAction())

    try {
        const product = await agent.Products.details(id)
        dispatch({type: GET_PRODUCT, payload: product})
    } catch (error) {
        dispatch(failAction(error))
    } finally {
        dispatch(stopAction())
    }
}