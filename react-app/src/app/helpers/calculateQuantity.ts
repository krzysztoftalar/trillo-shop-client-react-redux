const calcQtyOptions = (
    qty: number
): { options: { id: number; value: string }[]; index: number } => {
    const options: { id: number; value: string }[] = [];
    let index: number;

    if (qty === 1) {
        for (let i = 1; i < 6; i++) {
            options.push({ id: i, value: `${i}` });
        }
        index = 0;
    } else if (qty === 2) {
        options.push({ id: qty - 1, value: `${qty - 1}` });
        for (let i = 2; i < 6; i++) {
            options.push({ id: i, value: `${i}` });
        }
        index = 1;
    } else {
        options.push({ id: qty - 2, value: `${qty - 2}` });
        options.push({ id: qty - 1, value: `${qty - 1}` });
        options.push({ id: qty, value: `${qty}` });
        options.push({ id: qty + 1, value: `${qty + 1}` });
        options.push({ id: qty + 2, value: `${qty + 2}` });
        index = 2;
    }

    return { options, index };
};

export default calcQtyOptions;
