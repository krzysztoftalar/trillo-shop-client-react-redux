import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// imports from src
import App from './app/layout/App';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
