import { Reducer } from 'redux';
// Imports from src
import {
    GET_CURRENT_USER,
    LOGIN,
    LOGOUT,
    UserActionTypes,
    UserState,
} from './types';

export const INITIAL_STATE: UserState = {
    user: null,
    token: window.localStorage.getItem('jwt'),
};

export const UserReducer: Reducer<UserState, UserActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case LOGIN:
        case GET_CURRENT_USER: {
            window.localStorage.setItem('jwt', action.payload.token);
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
            };
        }

        case LOGOUT: {
            window.localStorage.removeItem('jwt');
            return { ...state, user: null, token: null };
        }

        default:
            return state;
    }
};
