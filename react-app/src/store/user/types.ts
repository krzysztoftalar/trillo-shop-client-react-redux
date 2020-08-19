import { Action } from 'redux';

export interface IUser {
    displayName: string;
    username: string;
    token: string;
}

export interface IUserFormValues {
    displayName: string;
    username: string;
    email: string;
    password: string;
}

export interface UserState {
    user: IUser | null;
    token: string | null;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export interface LoginAction extends Action {
    type: typeof LOGIN;
    payload: IUser;
}

export interface LogoutAction extends Action {
    type: typeof LOGOUT;
}

export interface GetCurrentUserAction extends Action {
    type: typeof GET_CURRENT_USER;
    payload: IUser;
}

export type UserActionTypes = LoginAction | LogoutAction | GetCurrentUserAction;
