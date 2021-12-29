import { combineReducers } from "redux";
import userReducers from "./userReducers";
import questionReducers from "./questionReducers";
import planReducers from "./planReducers";

const rootReducer = combineReducers({
    userReducers,
    questionReducers,
    planReducers,
});

export default rootReducer;
