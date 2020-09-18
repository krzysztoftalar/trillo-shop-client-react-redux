import React from 'react';
// Imports from src
import useWindowSize from '../../app/hooks/useWindowSize';

interface IProps {
    handleBackdrop: () => void;
    open: boolean;
}

const Backdrop: React.FC<IProps> = ({
    handleBackdrop,
    open,
}: IProps): JSX.Element => {
    const width = useWindowSize();

    const renderBackdrop = () => {
        if (open && width > 400 && width < 1200) {
            return <div onClick={handleBackdrop} className="backdrop" />;
        }
        return <></>;
    };

    return renderBackdrop();
};

export default Backdrop;
