import { Action } from 'redux';
// Imports from src
import { IDelivery } from '../../models/delivery';

export interface DeliveryState {
    deliveryMethods: IDelivery[];
}

export const GET_DELIVERY_METHODS = 'GET_DELIVERY_METHODS';

export interface GetDeliveryMethodsAction extends Action {
    type: typeof GET_DELIVERY_METHODS;
    payload: IDelivery[];
}

export type DeliveryActionTypes = GetDeliveryMethodsAction;
