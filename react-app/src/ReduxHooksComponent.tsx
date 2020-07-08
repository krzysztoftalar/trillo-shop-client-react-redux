import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { IProduct } from "./store/product/types";
import { setPredicate } from "./store/product/action";

interface StateProps {
    products: IProduct[],
    predicate: Map<string, string>
}

const ReduxHooksComponent = () => {
    const {products, predicate} = useSelector<RootState, StateProps>((state) => {
        return {
            products: state.product.products,
            predicate: state.product.predicate
        }
    })

    //const product = useSelector((state: RootState) => state.product.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPredicate('categoryName', 'rock'))
    }, [dispatch]);

    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.productId}>
                        <h2>{product.productName}</h2>
                        <h1>{product.categoryName}</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default ReduxHooksComponent;