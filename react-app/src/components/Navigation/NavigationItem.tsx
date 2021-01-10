import React from 'react';

interface IProps {
    props?: {
        ul: string;
        li: string;
        a: string;
    };
    link: {
        text: string;
    };
    onClick: () => void;
}

const NavigationItem: React.FC<IProps> = ({
    props,
    link,
    onClick,
}: IProps): JSX.Element => {
    return (
        <li className={`navigation__item ${props?.li}`}>
            <button
                onClick={onClick}
                className={`navigation__link ${props?.a}`}
                type="button"
            >
                {link?.text}
            </button>
        </li>
    );
};

NavigationItem.defaultProps = {
    props: { ul: '', li: '', a: '' },
};

export default NavigationItem;
