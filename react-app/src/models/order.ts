import { IAddress } from './address';

export interface IOrderToCreate {
    shippingId: number;
    paymentId: number;
    shipToAddress: IAddress;
}
