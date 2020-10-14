import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import HamburgerButton from '../Buttons/HamburgerButton';
import useBodyClass from '../../app/hooks/useBodyClass';
import { RootState } from '../../store/rootState';
import { handleModal } from '../../store/ui/action';

interface StateProps {
    openModal: boolean;
}

interface IProps {
    title: string;
    content: React.ReactNode;
}

const SideModal: React.FC<IProps> = ({ title, content }): JSX.Element => {
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
            className={`sideModal ${
                openModal ? 'moveAndFadeInFromRight' : 'moveAndFadeOutToRight'
            }`}
        >
            <div className="sideModal__header-box">
                <h3 className="sideModal__header">{title}</h3>
                <span className="sideModal__text">Close</span>
                <HamburgerButton
                    handleHamburger={handleHamburger}
                    open={openModal}
                />
            </div>

            <div className="sideModal__content-box">{content}</div>
        </div>
    );
};

export default SideModal;
