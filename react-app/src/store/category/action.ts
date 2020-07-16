import { ThunkResult } from "../../app/helpers/reduxHelpers";
import {
    errorActionAsync,
    startActionAsync,
    stopActionAsync,
} from "../asyncAction/action";
import agent from "../../app/api/agent";
import { GET_CATEGORIES } from "./types";

export const getCategories = (): ThunkResult => async (dispatch) => {
    dispatch(startActionAsync());

    try {
        const categories = await agent.Categories.list();
        dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
        dispatch(errorActionAsync(error));
    } finally {
        dispatch(stopActionAsync());
    }
};
