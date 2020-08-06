import { ITEMS_PER_PAGE } from '../../store/product/types';

const setParams = (pageIndex: number, predicate: { key: string; value: string }): URLSearchParams => {
    const params = new URLSearchParams();

    params.append('itemsPerPage', String(ITEMS_PER_PAGE));
    params.append('skip', `${pageIndex ? pageIndex * ITEMS_PER_PAGE : 0}`);
    params.append(predicate.key, predicate.value);

    return params;
};

export default setParams;
