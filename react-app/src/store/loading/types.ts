import { Action } from "redux";

export interface LoadingState {
    loading: boolean
    error: string
}

export const START_ACTION = 'START_ACTION'
export const STOP_ACTION = 'STOP_ACTION'
export const FAIL_ACTION = 'FAIL_ACTION'

export interface StartAction extends Action {
    type: typeof START_ACTION
}

export interface StopAction extends Action {
    type: typeof STOP_ACTION
}

export interface FailAction extends Action {
    type: typeof FAIL_ACTION
    payload: string
}

export type LoadingActionTypes = StartAction | StopAction | FailAction
