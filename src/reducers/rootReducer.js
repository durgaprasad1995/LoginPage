import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import loginReducer from "./loginReducer";
import counter from "./counter"

export default combineReducers({
  simpleReducer,
  loginReducer,
  counter
});
