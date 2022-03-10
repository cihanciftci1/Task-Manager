import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState={};

let configureStore = createStore(rootReducer,initialState,applyMiddleware(thunk));

export default configureStore;