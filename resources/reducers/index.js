import { combineReducers } from "redux";
import userReducers from "./userReducers";
import questionReducers from "./questionReducers";

const rootReducer = combineReducers({
    userReducers,
    questionReducers,
});

export default rootReducer;
