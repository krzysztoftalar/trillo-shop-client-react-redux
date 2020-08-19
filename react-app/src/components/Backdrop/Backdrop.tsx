import React from 'react';

interface IProps {
    handleBackdrop: () => void;
}

const Backdrop: React.FC<IProps> = ({ handleBackdrop }: IProps): JSX.Element => {
    return <div onClick={handleBackdrop} className="backdrop" />;
};

export default Backdrop;
