import { ProductActionTypes } from './product/types';
import { CategoryActionTypes } from './category/types';
import { UserActionTypes } from './user/types';
import { UIActionTypes } from './ui/types';
import { ErrorActionTypes } from './error/type';
import { CartActionTypes } from './cart/types';
import { DeliveryActionTypes } from './delivery/types';
import { PaymentActionTypes } from './payment/types';

export type RootAction =
    | ProductActionTypes
    | CategoryActionTypes
    | UserActionTypes
    | UIActionTypes
    | ErrorActionTypes
    | CartActionTypes
    | DeliveryActionTypes
    | PaymentActionTypes;
