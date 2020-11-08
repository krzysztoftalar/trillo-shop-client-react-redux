import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// Imports from src
import '../../assets/css/style.css';
import Home from '../../pages/home';
import Product from '../../pages/product';
import Modal from '../../components/Modal/Modal';
import Checkout from '../../pages/checkout';
import StripeCanceled from '../../components/User/Payment/StripeCanceled';
import OrderSuccess from '../../components/User/Payment/OrderSuccess';

const App = (): JSX.Element => {
    // const token = useSelector(getToken());
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     if (token) {
    //         dispatch(getCurrentUser());
    //     }
    // }, [token, dispatch]);

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
