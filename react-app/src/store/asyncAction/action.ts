import {
    ERROR_ACTION_ASYNC,
    ErrorActionAsync,
    START_ACTION_ASYNC,
    StartActionAsync,
    STOP_ACTION_ASYNC,
    StopActionAsync,
} from "./types";

export const startActionAsync = (): StartActionAsync => ({
    type: START_ACTION_ASYNC,
});

export const stopActionAsync = (): StopActionAsync => ({
    type: STOP_ACTION_ASYNC,
});

export const errorActionAsync = (error: string): ErrorActionAsync => ({
    type: ERROR_ACTION_ASYNC,
    payload: error,
});
