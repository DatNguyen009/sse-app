import { createStore,applyMiddleware } from "redux";
import rootReducers from "./reducers/index.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";

const store = createStore(rootReducers,
    composeWithDevTools(
        applyMiddleware(reduxThunk),
    )
);
export default store;