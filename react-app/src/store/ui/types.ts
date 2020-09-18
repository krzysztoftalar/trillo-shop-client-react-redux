import { Action } from 'redux';
import React from 'react';

export interface IAction {
    name: string;
    id?: number;
}

export interface IModal {
    open: boolean;
    body: React.ReactNode;
}

export interface UIState {
    loaderActions: IAction[];
    modal: IModal;
    openSideDrawer: boolean;
}

export const START_ACTION = 'START_ACTION';
export const STOP_ACTION = 'STOP_ACTION';
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const HANDLE_SIDE_DRAWER = 'HANDLE_SIDE_DRAWER';

export interface StartAction extends Action {
    type: typeof START_ACTION;
    payload: IAction;
}

export interface StopAction extends Action {
    type: typeof STOP_ACTION;
    payload: IAction;
}

export interface HandleModalAction extends Action {
    type: typeof HANDLE_MODAL;
    payload: React.ReactNode;
}

export interface HandleSideDrawerAction extends Action {
    type: typeof HANDLE_SIDE_DRAWER;
}
export type UIActionTypes =
    | StartAction
    | StopAction
    | HandleModalAction
    | HandleSideDrawerAction;
