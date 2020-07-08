import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
//
import { RootActions, RootState } from "./store";
import { getProduct, getProducts } from "./store/product/action";
import { IProduct } from "./store/product/types";
import ReduxHooksComponent from "./ReduxHooksComponent";

interface StateProps {
    products: IProduct[]
    product: IProduct | null
}

interface DispatchProps {
    getProducts: () => void
    getProduct: (id: number) => void
}

interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps

const App: React.FC<Props> = ({product, getProducts,getProduct}) => {
    useEffect(() => {
        getProduct(1)
    }, [getProduct])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div key={product.productId}>
                <h2>{product.productId}</h2>
                <h1>{product.productName}</h1>
            </div>
            <ReduxHooksComponent/>
        </div>
    )
}

const mapStateToProps = ({product}: RootState): StateProps => {
    return {
        products: product.products,
        product: product.product
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, RootActions>): DispatchProps => {
    return {
        getProducts: () => dispatch(getProducts()),
        getProduct: (id: number) => dispatch(getProduct(id))
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(App);

