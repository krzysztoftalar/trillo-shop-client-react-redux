import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { RootState } from '../../store/rootState';
import useTimeOut from '../../app/hooks/useTimeOut';
import { handleModal } from '../../store/ui/action';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface StateProps {
    open: boolean;
    body: React.ReactNode;
}

const Modal = (): JSX.Element => {
    const dispatch = useDispatch();
    const { open, body } = useSelector<RootState, StateProps>((state) => {
        return {
            open: state.ui.modal.open,
            body: state.ui.modal.body,
        };
    });

    // Unmount element (body) after animation ends
    const [shouldRender, setShouldRender] = useState(open);
    useTimeOut(() => setShouldRender(open), open ? 0 : 400);

    if (!shouldRender) return <></>;

    return ReactDOM.createPortal(
        <div className="modal">
            <div
                onClick={() => dispatch(handleModal())}
                className="modal__backdrop"
            />
            {shouldRender && body}
        </div>,
        modalRoot
    );
};

export default Modal;
