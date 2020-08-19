import { createSelector } from 'reselect';
// Imports from src
import { RootState } from '../rootState';

export const selectErrors = (state: RootState) => state.error.errors;

export const selectError = (actionsToCheck: string) => {
    return createSelector([selectErrors], (errors) =>
        errors.find((error) => error.name === actionsToCheck)
    );
};
