import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App.jsx";

import { connect } from "react-redux";
window.connect = connect;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);
