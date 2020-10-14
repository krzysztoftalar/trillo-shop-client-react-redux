import { createSelector } from 'reselect';
// Imports from src
import { RootState } from '../rootState';
import { IError } from './type';

export const selectErrors = (state: RootState): IError[] => state.error.errors;

export const selectError = (actionsToCheck: string) => {
    return createSelector([selectErrors], (errors) =>
        errors.find((error) => error.name === actionsToCheck)
    );
};
