import React, { useCallback, useEffect, useRef } from 'react';

const useInterval = (
    callback: React.EffectCallback,
    delay: number
): (() => void) => {
    const intervalRef = useRef() as React.MutableRefObject<number>;
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    const reset = useCallback(() => {
        window.clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(
            () => savedCallback.current(),
            delay
        );
    }, [delay, intervalRef]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (delay !== null) {
            reset();

            return () => window.clearInterval(intervalRef.current);
        }
    }, [reset, delay, intervalRef]);

    return reset;
};

export default useInterval;
