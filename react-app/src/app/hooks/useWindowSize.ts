import { useEffect, useState } from 'react';

const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

const useWindowSize = (): number => {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

export default useWindowSize;
