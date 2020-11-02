import { ProductState } from './product/types';
import { CategoryState } from './category/types';
import { UserState } from './user/types';
import { UIState } from './ui/types';
import { ErrorState } from './error/type';
import { CartState } from './cart/types';
import { DeliveryState } from './delivery/types';
import { PaymentState } from './payment/types';

export interface RootState {
    user: UserState;
    product: ProductState;
    category: CategoryState;
    ui: UIState;
    error: ErrorState;
    cart: CartState;
    delivery: DeliveryState;
    payment: PaymentState;
}
