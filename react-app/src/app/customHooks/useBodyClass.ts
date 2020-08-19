import { useEffect } from 'react';

const addClassToBody = (className: string) => document.body.classList.add(className);
const removeClassFromBody = (className: string) => document.body.classList.remove(className);

const useBodyClass = (className: string | string[]): void => {
    useEffect(() => {
        className instanceof Array ? className.map(addClassToBody) : addClassToBody(className);

        return () => {
            className instanceof Array
                ? className.map(removeClassFromBody)
                : removeClassFromBody(className);
        };
    }, [className]);
};

export default useBodyClass;
