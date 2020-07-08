import { FAIL_ACTION, FailAction, START_ACTION, StartAction, STOP_ACTION, StopAction } from "./types";

export const startAction = (): StartAction => ({
    type: START_ACTION
})

export const stopAction = (): StopAction => ({
    type: STOP_ACTION
})

export const failAction = (error: string): FailAction => ({
    type: FAIL_ACTION,
    payload: error
})