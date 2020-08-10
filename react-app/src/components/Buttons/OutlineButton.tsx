import React from 'react';

interface IProps {
    content: string;
}

const OutlineButton: React.FC<IProps> = ({ content }: IProps): JSX.Element => {
    return (
        <button className="btn-outline btn-outline--grey" type="button">
            {content}
        </button>
    );
};

export default OutlineButton;
