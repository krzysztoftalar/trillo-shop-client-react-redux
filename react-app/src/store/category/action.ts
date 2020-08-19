import { ThunkResult } from '../../app/helpers/reduxHelpers';
import agent from '../../app/api/agent';
import { GET_CATEGORIES } from './types';

const getCategories = (): ThunkResult => async (dispatch) => {
    const categories = await agent.Categories.list();
    dispatch({ type: GET_CATEGORIES, payload: categories });
};

export default getCategories;
