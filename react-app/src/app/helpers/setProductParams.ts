import { ITEMS_PER_PAGE } from '../../store/product/types';

const setProductParams = (
    pageIndex: number,
    params: { [key: string]: string }[] | undefined
): URLSearchParams => {
    const urlParams = new URLSearchParams();

    urlParams.append('limit', String(ITEMS_PER_PAGE));
    urlParams.append('skip', `${pageIndex ? pageIndex * ITEMS_PER_PAGE : 0}`);

    if (params) {
        params.map((value) =>
            urlParams.append(Object.keys(value)[0], Object.values(value)[0])
        );
    }

    return urlParams;
};

export default setProductParams;
