import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function ({ children, initialState = {} }) {
    const store = createStore(reducers, initialState, enhance(applyMiddleware(thunk)));
    return <Provider store={store}>{children}</Provider>;
}
