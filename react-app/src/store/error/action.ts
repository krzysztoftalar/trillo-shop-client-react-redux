import { ERROR_ACTION, ErrorAction } from './type';

export const errorAction = (
    name: string,
    error: string | null
): ErrorAction => ({
    type: ERROR_ACTION,
    payload: {
        name,
        error,
    },
});
