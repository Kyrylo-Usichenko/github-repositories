import './index.less'
import React from 'react'
import {createRoot} from 'react-dom/client';
import App from "./component/App";
import {Provider} from "react-redux";
import {store} from "./reducers";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App tab="home"/>
    </Provider>
);