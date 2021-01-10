import { Reducer } from 'redux';
// Imports from src
import {
    CURRENT_USER,
    LOGIN,
    LOGOUT,
    UserActionTypes,
    UserState,
} from './types';

export const INITIAL_STATE: UserState = {
    timer: null,
    user: null,
};

export const UserReducer: Reducer<UserState, UserActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case LOGIN:
        case CURRENT_USER: {
            const { user, timer } = action.payload;
            return {
                ...state,
                user,
                timer,
            };
        }

        case LOGOUT:
            return { ...state, user: null };

        default:
            return state;
    }
};
