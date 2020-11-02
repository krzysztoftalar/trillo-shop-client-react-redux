import { Reducer } from 'redux';
// Imports from src
import {
    DeliveryActionTypes,
    DeliveryState,
    GET_DELIVERY_METHODS,
} from './types';

export const INITIAL_STATE: DeliveryState = {
    deliveryMethods: [],
};

export const DeliveryReducer: Reducer<DeliveryState, DeliveryActionTypes> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_DELIVERY_METHODS:
            return {
                ...state,
                deliveryMethods: action.payload,
            };

        default:
            return state;
    }
};
