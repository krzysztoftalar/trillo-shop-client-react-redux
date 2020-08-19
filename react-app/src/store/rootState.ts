import { ProductState } from './product/types';
import { CategoryState } from './category/types';
import { UserState } from './user/types';
import { UIState } from './ui/types';
import { ErrorState } from './error/type';

export interface RootState {
    user: UserState;
    product: ProductState;
    category: CategoryState;
    ui: UIState;
    error: ErrorState;
}
