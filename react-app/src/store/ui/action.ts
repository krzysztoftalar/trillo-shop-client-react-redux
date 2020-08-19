import React from 'react';
import {
    HANDLE_MODAL,
    HANDLE_SIDE_DRAWER,
    HandleModalAction,
    HandleSideDrawerAction,
    START_ACTION,
    StartAction,
    STOP_ACTION,
    StopAction,
} from './types';

export const startAction = (name: string, id?: number): StartAction => ({
    type: START_ACTION,
    payload: {
        name,
        id,
    },
});

export const stopAction = (name: string): StopAction => ({
    type: STOP_ACTION,
    payload: {
        name,
    },
});

export const handleModal = (body?: React.ReactNode): HandleModalAction => ({
    type: HANDLE_MODAL,
    payload: body,
});

export const handleSideDrawer = (): HandleSideDrawerAction => ({
    type: HANDLE_SIDE_DRAWER,
});
