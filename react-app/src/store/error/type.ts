import { Action } from 'redux';

export interface IError {
    name: string;
    error: string | null;
}

export interface ErrorState {
    errors: IError[];
}

export const ERROR_ACTION = 'ERROR_ACTION';

export interface ErrorAction extends Action {
    type: typeof ERROR_ACTION;
    payload: IError;
}

export type ErrorActionTypes = ErrorAction;
