import { createSelector } from 'reselect';
import { RootState } from '../rootState';

export const getUserState = (state: RootState) => state.user;

export const checkIfIsLoggedIn = () =>
    createSelector([getUserState], (user) => !!user.user);

export const getToken = () =>
    createSelector([getUserState], (user) => user.token);
