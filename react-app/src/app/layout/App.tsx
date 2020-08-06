import React, { ReactElement } from 'react';
// imports from src
import Home from '../../pages/home';
import '../../assets/css/style.css';

const App = (): ReactElement => {
    return (
        <div className="container">
            <Home />
        </div>
    );
};

export default App;
