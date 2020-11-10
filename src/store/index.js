// Index.js file in store folder...!

import rootReducer from "./reducer/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;