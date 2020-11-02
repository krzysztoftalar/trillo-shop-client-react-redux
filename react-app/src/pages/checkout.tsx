import React from 'react';
import { useDispatch } from 'react-redux';
// Imports from src
import { handleModal } from '../store/ui/action';
import Header from '../components/Header/Header';
import SideModal from '../components/Modal/SideModal';
import LoginForm from '../components/User/Forms/LoginForm';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import Footer from '../components/Home/Footer';

const Checkout = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div className="checkout">
            {/* Header */}
            <Header />

            {/* Page title */}
            <h1 className="page-title">Checkout</h1>

            {/* Login button */}
            <div className="checkout__login-box">
                Returning customer? &nbsp;
                <button
                    onClick={() =>
                        dispatch(
                            handleModal(
                                <SideModal
                                    title="Sign In"
                                    content={<LoginForm />}
                                />
                            )
                        )
                    }
                    className="checkout__btn-login"
                    type="button"
                >
                    Click here to login
                </button>
            </div>

            {/* Checkout form */}
            <CheckoutForm />

            {/* Footer */}
            <Footer smallFooter />
        </div>
    );
};

export default Checkout;
