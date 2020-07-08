import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
// import reducers, types
import { ProductReducer } from "./product/reducer";
import { ActionReducer } from "./loading/reducer";
import { ProductActionTypes, ProductState } from "./product/types";
import { LoadingActionTypes, LoadingState } from "./loading/types";

export interface RootState {
    product: ProductState
    loading: LoadingState
}

export type RootActions = LoadingActionTypes | ProductActionTypes;

export type ThunkResult = ThunkAction<void, RootState, undefined, RootActions>

export type ReduxDispatch = ThunkDispatch<RootState, undefined, RootActions>;

export const reducers = combineReducers({
    product: ProductReducer,
    loading: ActionReducer
})

export const store = createStore<RootState, RootActions, {}, {}>(
    reducers,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)))