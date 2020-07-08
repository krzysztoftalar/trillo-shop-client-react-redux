import { Reducer } from "redux";
// import types
import { FAIL_ACTION, LoadingActionTypes, LoadingState, START_ACTION, STOP_ACTION } from "./types";

export const INITIAL_STATE: LoadingState = {
    loading: false,
    error: ''
}

export const ActionReducer: Reducer<LoadingState, LoadingActionTypes> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_ACTION:
            return {...state, loading: true}

        case STOP_ACTION:
            return {...state, loading: false}

        case FAIL_ACTION:
            return {...state, error: action.payload, loading: false}

        default:
            return state
    }
}

