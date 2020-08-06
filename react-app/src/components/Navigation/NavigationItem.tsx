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
}

const NavigationItem: React.FC<IProps> = ({ props, link }: IProps): JSX.Element => {
    return (
        <ul className={`navigation ${props?.ul}`}>
            <li className={`navigation__item ${props?.li}`}>
                <a href="/" className={`navigation__link ${props?.a}`}>
                    {link?.text}
                </a>
            </li>
        </ul>
    );
};

NavigationItem.defaultProps = {
    props: { ul: '', li: '', a: '' },
};

export default NavigationItem;
