import { Reducer } from 'redux';
// Imports from src
import {
    HANDLE_MODAL,
    HANDLE_SIDE_DRAWER,
    START_ACTION,
    STOP_ACTION,
    UIActionTypes,
    UIState,
} from './types';

export const INITIAL_STATE: UIState = {
    loaderActions: [],
    modal: { open: false, body: null },
    openSideDrawer: false,
};

export const UIReducer: Reducer<UIState, UIActionTypes> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_ACTION: {
            const { name, id } = action.payload;

            return {
                ...state,
                loaderActions: [...state.loaderActions, { name, id }],
            };
        }

        case STOP_ACTION: {
            const { name } = action.payload;

            return {
                ...state,
                loaderActions: [...state.loaderActions.filter((item) => item.name !== name)],
            };
        }

        case HANDLE_MODAL: {
            if (!state.modal.open) {
                return {
                    ...state,
                    modal: {
                        ...state.modal,
                        open: true,
                        body: action.payload,
                    },
                };
            }

            return { ...state, modal: { ...state.modal, open: false } };
        }

        case HANDLE_SIDE_DRAWER:
            return { ...state, openSideDrawer: !state.openSideDrawer };

        default:
            return state;
    }
};
