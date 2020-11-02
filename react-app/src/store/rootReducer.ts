import { combineReducers } from 'redux';
import { ProductReducer } from './product/reducer';
import { CategoryReducer } from './category/reducer';
import { UserReducer } from './user/reducer';
import { UIReducer } from './ui/uiReducer';
import { ErrorReducer } from './error/reducer';
import { CartReducer } from './cart/reducer';
import { DeliveryReducer } from './delivery/reducer';
import { PaymentReducer } from './payment/reducer';

const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    user: UserReducer,
    ui: UIReducer,
    error: ErrorReducer,
    cart: CartReducer,
    delivery: DeliveryReducer,
    payment: PaymentReducer,
});

export default reducers;
