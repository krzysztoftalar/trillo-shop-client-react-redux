import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
// Imports from src
import { CART_COOKIE } from '../../../app/helpers/constants';

const OrderSuccess = (): JSX.Element => {
    const [, , removeCookie] = useCookies([CART_COOKIE]);

    useEffect(() => {
        removeCookie(CART_COOKIE, { path: '/' });
    }, [removeCookie]);

    return (
        <div>
            <h1>Your payment succeeded</h1>
        </div>
    );
};

export default OrderSuccess;
