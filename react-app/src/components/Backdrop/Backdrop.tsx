import React from 'react';
// Imports from src
import useWindowSize from '../../app/customHooks/useWindowSize';

interface IProps {
    setOpen: (open: boolean) => void;
    open: boolean;
}

const Backdrop: React.FC<IProps> = ({ setOpen, open }: IProps): JSX.Element => {
    const width = useWindowSize();

    const renderBackdrop = () => {
        if (open && width > 400 && width < 1200) {
            return <div onClick={() => setOpen(false)} className="backdrop" />;
        }

        return <></>;
    };

    return renderBackdrop();
};

export default Backdrop;
