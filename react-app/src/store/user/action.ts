import { ThunkResult } from '../../app/helpers/reduxHelpers';
// Imports from src
import agent, { errorResponse } from '../../app/api/agent';
import {
    GET_CURRENT_USER,
    IUserFormValues,
    LOGIN,
    LOGOUT,
    LogoutAction,
} from './types';
import { handleModal, startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';

export const login = (userValues: IUserFormValues): ThunkResult => async (
    dispatch
) => {
    dispatch(startAction(LOGIN));
    dispatch(errorAction(LOGIN, null));

    try {
        const user = await agent.User.login(userValues);
        dispatch({ type: LOGIN, payload: user });

        dispatch(handleModal());
    } catch (error) {
        dispatch(errorAction(LOGIN, errorResponse(error)));
    } finally {
        dispatch(stopAction(LOGIN));
    }
};

export const logout = (): LogoutAction => ({
    type: LOGOUT,
});

export const getCurrentUser = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(GET_CURRENT_USER));

    try {
        const user = await agent.User.currentUser();
        dispatch({ type: GET_CURRENT_USER, payload: user });
    } catch (error) {
        dispatch(errorAction(GET_CURRENT_USER, errorResponse(error)));
    } finally {
        dispatch(stopAction(GET_CURRENT_USER));
    }
};
