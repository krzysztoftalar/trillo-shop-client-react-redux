import { Reducer } from 'redux';
import { CategoryActionTypes, CategoryState, GET_CATEGORIES } from './types';

export const INITIAL_STATE: CategoryState = {
    categories: [],
};

export const CategoryReducer: Reducer<CategoryState, CategoryActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        default:
            return state;
    }
};
