import React from 'react';

interface IProps {
    props?: {
        ul: string;
        li: string;
        a: string;
    };
    links: {
        text: string;
    }[];
}

const Navigation: React.FC<IProps> = ({ props, links }: IProps): JSX.Element => (
    <ul className={`navigation ${props?.ul}`}>
        {links.map((item) => (
            <li className={`navigation__item ${props?.li}`} key={item.text}>
                <a href="/" className={`navigation__link ${props?.a}`}>
                    {item.text}
                </a>
            </li>
        ))}
    </ul>
);

Navigation.defaultProps = {
    props: { ul: '', li: '', a: '' },
};

export default Navigation;
