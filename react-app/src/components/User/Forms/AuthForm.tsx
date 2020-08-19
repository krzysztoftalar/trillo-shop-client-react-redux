import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import HamburgerButton from '../../Buttons/HamburgerButton';
import useBodyClass from '../../../app/customHooks/useBodyClass';
import { RootState } from '../../../store/rootState';
import { handleModal } from '../../../store/ui/action';
import LoginForm from './LoginForm';

interface StateProps {
    openModal: boolean;
}

const AuthForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { openModal } = useSelector<RootState, StateProps>((state) => {
        return {
            openModal: state.ui.modal.open,
        };
    });

    useBodyClass('overflow-hidden');

    const handleHamburger = () => {
        dispatch(handleModal());
    };

    return (
        <div
            className={`authForm ${openModal ? 'moveAndFadeInFromRight' : 'moveAndFadeOutToRight'}`}
        >
            <div className="authForm__header-box">
                <h3 className="authForm__header">Sign in</h3>
                <span className="authForm__text">Close</span>
                <HamburgerButton handleHamburger={handleHamburger} open={openModal} />
            </div>

            <div className="authForm__content-box">
                <LoginForm />
            </div>
        </div>
    );
};

export default AuthForm;
