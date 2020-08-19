import { combineReducers } from 'redux';
import { ProductReducer } from './product/reducer';
import { CategoryReducer } from './category/reducer';
import { UserReducer } from './user/reducer';
import { UIReducer } from './ui/uiReducer';
import { ErrorReducer } from './error/reducer';

const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    user: UserReducer,
    ui: UIReducer,
    error: ErrorReducer,
});

export default reducers;
