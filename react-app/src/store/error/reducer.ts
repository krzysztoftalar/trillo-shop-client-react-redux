import { Reducer } from 'redux';
// Imports from src
import { ERROR_ACTION, ErrorAction, ErrorState } from './type';

export const INITIAL_STATE: ErrorState = {
    errors: [],
};

export const ErrorReducer: Reducer<ErrorState, ErrorAction> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR_ACTION: {
            if (action.payload.error === null) {
                return {
                    ...state,
                    errors: [...state.errors.filter((err) => err.name !== action.payload.name)],
                };
            }

            return {
                ...state,
                errors: [
                    {
                        name: action.payload.name,
                        error: action.payload.error,
                    },
                ],
            };
        }

        default:
            return state;
    }
};
