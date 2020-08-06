import { ProductState } from './product/types';
import { AsyncActionState } from './asyncAction/types';
import { CategoryState } from './category/types';

export interface RootState {
    loading: AsyncActionState;
    product: ProductState;
    category: CategoryState;
}
