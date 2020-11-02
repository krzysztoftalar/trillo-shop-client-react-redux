import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const StripeSuccess = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <div>
            <h1>Your payment succeeded</h1>
        </div>
    );
};

export default StripeSuccess;
