import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// imports from src
import '../../assets/css/style.css';
import Home from '../../pages/home';
import Modal from '../../components/Modal/Modal';
import { getToken } from '../../store/user/selectors';
import { getCurrentUser } from '../../store/user/action';

const App = (): ReactElement => {
    const token = useSelector(getToken());
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(getCurrentUser());
        }
    }, [token, dispatch]);

    return (
        <>
            <Modal />
            <Home />
        </>
    );
};

export default App;
