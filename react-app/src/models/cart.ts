export interface ICart {
    stockId: number;
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
}

export interface ICartEnvelope {
    cartProducts: ICart[];
    totalQty: number;
    totalValue: number;
}
