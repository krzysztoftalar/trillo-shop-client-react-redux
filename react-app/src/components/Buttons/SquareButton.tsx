import React from 'react';

interface IProps {
    handleClick: () => void;
}

const SquareButton: React.FC<IProps> = ({ handleClick }: IProps) => {
    return (
        <button onClick={() => handleClick()} className="button-square" type="button">
            <span className="button-square__icon">&rarr;</span>
        </button>
    );
};

export default SquareButton;
