import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Imports from src
import '../../assets/css/style.css';
import Home from '../../pages/home';
import Product from '../../pages/product';
import Modal from '../../components/Modal/Modal';
import Checkout from '../../pages/checkout';
import StripeCanceled from '../../components/User/Payment/StripeCanceled';
import OrderSuccess from '../../components/User/Payment/OrderSuccess';
import { currentUser } from '../../store/user/action';

const App = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);

    return (
        <>
            <Modal />
            <Route exact path="/" component={Home} />
            <Route
                path="/(.+)"
                render={() => (
                    <>
                        <Switch>
                            <Route path="/products/:id" component={Product} />
                            <Route path="/checkout" component={Checkout} />
                            <Route
                                path={[
                                    '/stripe-payment/success',
                                    '/orders/success',
                                ]}
                                component={OrderSuccess}
                            />
                            <Route
                                path="/stripe-payment/canceled"
                                component={StripeCanceled}
                            />
                        </Switch>
                    </>
                )}
            />
        </>
    );
};

export default withRouter(App);
