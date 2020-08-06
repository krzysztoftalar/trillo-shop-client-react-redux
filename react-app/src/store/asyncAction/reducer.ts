import { Reducer } from 'redux';
// imports from src
import { AsyncActionState, AsyncActionTypes, ERROR_ACTION_ASYNC, START_ACTION_ASYNC, STOP_ACTION_ASYNC } from './types';

export const INITIAL_STATE: AsyncActionState = {
    loading: false,
    error: '',
};

export const AsyncActionReducer: Reducer<AsyncActionState, AsyncActionTypes> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_ACTION_ASYNC:
            return { ...state, loading: true };

        case STOP_ACTION_ASYNC:
            return { ...state, loading: false };

        case ERROR_ACTION_ASYNC:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};
