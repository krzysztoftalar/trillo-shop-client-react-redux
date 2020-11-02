import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps {
    children: JSX.Element;
}

const ScrollToTop: React.FC<IProps> = ({
    location: { pathname },
    children,
}: IProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default withRouter(ScrollToTop);
