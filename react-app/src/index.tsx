import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// imports from src
import App from './app/layout/App';
import store from './store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>,
    document.getElementById('root')
);
