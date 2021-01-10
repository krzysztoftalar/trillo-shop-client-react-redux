import { ThunkResult } from '../../app/helpers/reduxHelpers';
// Imports from src
import agent, { errorResponse } from '../../app/api/agent';
import { CURRENT_USER, IUserFormValues, LOGIN, LOGOUT } from './types';
import { handleModal, startAction, stopAction } from '../ui/action';
import { errorAction } from '../error/action';
import { calcTokenTimeout } from '../../app/helpers/calculateTokenTimeOut';
import { JWT_TOKEN } from '../../app/helpers/constants';

export const currentUser = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(CURRENT_USER));

    const token = window.localStorage.getItem(JWT_TOKEN);

    if (token !== null) {
        try {
            const user = await agent.User.currentUser();

            dispatch({
                type: CURRENT_USER,
                payload: {
                    user,
                    timer: setTimeout(
                        () => dispatch(currentUser()),
                        calcTokenTimeout(user.token)
                    ),
                },
            });

            window.localStorage.setItem(JWT_TOKEN, user.token);
        } catch (error) {
            dispatch(errorAction(CURRENT_USER, errorResponse(error)));
        } finally {
            dispatch(stopAction(CURRENT_USER));
        }
    } else {
        dispatch({ type: CURRENT_USER, payload: { user: null } });
    }
};

export const login = (userValues: IUserFormValues): ThunkResult => async (
    dispatch
) => {
    dispatch(startAction(LOGIN));
    dispatch(errorAction(LOGIN, null));

    try {
        const user = await agent.User.login(userValues);

        dispatch({
            type: LOGIN,
            payload: {
                user,
                timer: setTimeout(
                    () => dispatch(currentUser()),
                    calcTokenTimeout(user.token)
                ),
            },
        });

        window.localStorage.setItem(JWT_TOKEN, user.token);

        dispatch(handleModal());
    } catch (error) {
        dispatch(errorAction(LOGIN, errorResponse(error)));
    } finally {
        dispatch(stopAction(LOGIN));
    }
};

export const logout = (): ThunkResult => async (dispatch) => {
    dispatch(startAction(LOGOUT));

    try {
        await agent.User.logout();
        dispatch({ type: LOGOUT });
        window.localStorage.removeItem(JWT_TOKEN);
    } catch (error) {
        dispatch(errorAction(LOGOUT, errorResponse(error)));
    } finally {
        dispatch(stopAction(LOGOUT));
    }
};
