import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/styles.scss";

import * as serviceWorker from './serviceWorker';

//ToastContainer
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <BrowserRouter>
        <Provider store = { store }>
            {/* Tost */}
            <ToastContainer autoClose={4000} />

            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
