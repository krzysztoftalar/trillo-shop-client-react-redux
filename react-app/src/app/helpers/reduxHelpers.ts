import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootAction } from '../../store/rootAction';
import { RootState } from '../../store/rootState';

export type ThunkResult = ThunkAction<void, RootState, undefined, RootAction>;

export type ReduxDispatch = ThunkDispatch<RootState, undefined, RootAction>;
