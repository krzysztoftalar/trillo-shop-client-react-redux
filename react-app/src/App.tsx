import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, setPredicate } from "./store/product/action";

const App = (): ReactElement => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPredicate("categoryName", "dance"));
    }, [dispatch]);

    return <div />;
};

export default App;
