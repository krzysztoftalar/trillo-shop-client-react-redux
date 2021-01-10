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
    timer: any;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CURRENT_USER = 'CURRENT_USER';

export interface LoginAction extends Action {
    type: typeof LOGIN;
    payload: { user: IUser | null; timer: NodeJS.Timeout };
}

export interface LogoutAction extends Action {
    type: typeof LOGOUT;
}

export interface CurrentUserAction extends Action {
    type: typeof CURRENT_USER;
    payload: { user: IUser | null; timer?: NodeJS.Timeout };
}

export type UserActionTypes = LoginAction | LogoutAction | CurrentUserAction;
