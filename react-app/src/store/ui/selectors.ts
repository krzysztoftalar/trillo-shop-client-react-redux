import { createSelector } from 'reselect';
import { RootState } from '../rootState';

export const selectLoaders = (state: RootState) => state.ui.loaderActions;

export const selectLoader = (...actionsToCheck: string[]) => {
    return createSelector([selectLoaders], (actions) =>
        actions.some((action) => actionsToCheck.includes(action.name))
    );
};

export const selectLoaderById = (actionsToCheck: string) => {
    return createSelector(
        [selectLoaders],
        (actions) => actions.find((action) => action.name === actionsToCheck)?.id
    );
};
