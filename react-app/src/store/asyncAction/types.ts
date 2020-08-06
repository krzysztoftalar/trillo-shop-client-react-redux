import { Action } from 'redux';

export interface AsyncActionState {
    loading: boolean;
    error: string;
}

export const START_ACTION_ASYNC = 'START_ACTION_ASYNC';
export const STOP_ACTION_ASYNC = 'STOP_ACTION_ASYNC';
export const ERROR_ACTION_ASYNC = 'ERROR_ACTION_ASYNC';

export interface StartActionAsync extends Action {
    type: typeof START_ACTION_ASYNC;
}

export interface StopActionAsync extends Action {
    type: typeof STOP_ACTION_ASYNC;
}

export interface ErrorActionAsync extends Action {
    type: typeof ERROR_ACTION_ASYNC;
    payload: string;
}

export type AsyncActionTypes = StartActionAsync | StopActionAsync | ErrorActionAsync;
