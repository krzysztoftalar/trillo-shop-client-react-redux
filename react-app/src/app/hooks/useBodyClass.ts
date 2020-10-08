import { useEffect } from 'react';

const addClassToBody = (className: string) =>
    document.body.classList.add(className);
const removeClassFromBody = (className: string) =>
    document.body.classList.remove(className);

const useBodyClass = (className: string | string[]): void => {
    useEffect(() => {
        className instanceof Array
            ? className.map((x) => addClassToBody(x))
            : addClassToBody(className);

        return () => {
            className instanceof Array
                ? className.map((x) => removeClassFromBody(x))
                : removeClassFromBody(className);
        };
    }, [className]);
};

export default useBodyClass;
