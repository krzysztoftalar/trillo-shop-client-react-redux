import { Action } from "redux";

export interface ICategory {
    categoryId: number;
    categoryName: string;
}

export interface CategoryState {
    categories: ICategory[];
}

export const GET_CATEGORIES = "GET_CATEGORIES";

export interface GetCategoriesAction extends Action {
    type: typeof GET_CATEGORIES;
    payload: ICategory[];
}

export type CategoryActionTypes = GetCategoriesAction;
