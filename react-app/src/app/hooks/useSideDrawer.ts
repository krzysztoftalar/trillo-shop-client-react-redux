import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { RootState } from '../../store/rootState';
import useTimeOut from './useTimeOut';
import { handleSideDrawer } from '../../store/ui/action';

const useSideDrawer = (): {
    shouldRender: boolean;
    handleBackdrop: () => void;
    open: boolean;
} => {
    const open = useSelector<RootState, boolean>(
        (state) => state.ui.openSideDrawer
    );

    const dispatch = useDispatch();

    // Unmount sidebar after animation ends
    const [shouldRender, setShouldRender] = useState(open);
    useTimeOut(() => setShouldRender(open), open ? 0 : 400);

    // Handle click on div Backdrop, set SideDrawer open to !open
    const handleBackdrop = () => {
        dispatch(handleSideDrawer());
    };

    return { shouldRender, handleBackdrop, open };
};

export default useSideDrawer;
