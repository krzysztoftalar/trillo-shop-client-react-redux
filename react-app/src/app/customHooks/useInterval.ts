import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number): void => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
