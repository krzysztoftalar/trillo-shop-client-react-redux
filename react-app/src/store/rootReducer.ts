import { combineReducers } from 'redux';
import { ProductReducer } from './product/reducer';
import { AsyncActionReducer } from './asyncAction/reducer';
import { CategoryReducer } from './category/reducer';

const reducers = combineReducers({
    loading: AsyncActionReducer,
    product: ProductReducer,
    category: CategoryReducer,
});

export default reducers;
