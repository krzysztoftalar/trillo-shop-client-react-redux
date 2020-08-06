import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// imports from src
import reducers from './rootReducer';
import { RootState } from './rootState';
import { RootAction } from './rootAction';

const store = createStore<RootState, RootAction, unknown, unknown>(
    reducers,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>))
);

export default store;
