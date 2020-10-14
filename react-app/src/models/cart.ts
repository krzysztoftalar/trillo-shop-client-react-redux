export interface ICart {
    stockId: number;
    productName: string;
    productSize: string;
    productColor: string;
    quantity: number;
    price: number;
    photoUrl: string;
}

export interface ICartEnvelope {
    cartProducts: ICart[];
    totalQty: number;
    totalValue: number;
}
