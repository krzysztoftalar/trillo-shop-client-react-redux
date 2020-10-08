import { createSelector } from 'reselect';
// Imports from src
import { RootState } from '../rootState';
import { UserState } from './types';

export const getUserState = (state: RootState): UserState => state.user;

export const checkIfIsLoggedIn = () =>
    createSelector([getUserState], (user) => !!user.user);

export const getToken = () =>
    createSelector([getUserState], (user) => user.token);
