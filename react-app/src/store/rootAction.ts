import { AsyncActionTypes } from "./asyncAction/types";
import { ProductActionTypes } from "./product/types";
import { CategoryActionTypes } from "./category/types";

export type RootAction =
    | AsyncActionTypes
    | ProductActionTypes
    | CategoryActionTypes;
