import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { handleModal } from '../store/ui/action';
import Header from '../components/Header/Header';
import SideModal from '../components/Modal/SideModal';
import LoginForm from '../components/User/Forms/LoginForm';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import Footer from '../components/Home/Footer';
import { checkIfIsLoggedIn } from '../store/user/selectors';

const Checkout = (): JSX.Element => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(checkIfIsLoggedIn());

    const handleLogin = () => {
        dispatch(
            handleModal(<SideModal title="Sign In" content={<LoginForm />} />)
        );
    };

    return (
        <div className="checkout">
            {/* Header */}
            <Header />

            {/* Page title */}
            <h1 className="page-title">Checkout</h1>

            {/* Login button */}
            {!isLoggedIn && (
                <div className="checkout__login-box">
                    Returning customer? &nbsp;
                    <button
                        onClick={handleLogin}
                        className="checkout__btn-login"
                        type="button"
                    >
                        Click here to login
                    </button>
                </div>
            )}

            {/* Checkout form */}
            <CheckoutForm />

            {/* Footer */}
            <Footer smallFooter />
        </div>
    );
};

export default Checkout;
