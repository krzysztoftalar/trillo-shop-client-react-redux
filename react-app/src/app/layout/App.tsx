import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// imports from src
import '../../assets/css/style.css';
import Home from '../../pages/home';
import Product from '../../pages/product';
import Modal from '../../components/Modal/Modal';

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
                        </Switch>
                    </>
                )}
            />
        </>
    );
};

export default withRouter(App);
