import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";

const rootReducer=combineReducers({
    errors:errorsReducer,
    projectTask:projectTaskReducer
})

export default rootReducer;