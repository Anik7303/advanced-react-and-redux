import { createStore, compose } from "redux";

import reducers from "./reducers";

const enhance = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers);
