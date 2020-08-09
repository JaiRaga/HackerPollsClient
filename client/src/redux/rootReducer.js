import { combineReducers } from "redux";
import vote from "./reducers/vote";

const rootReducer = combineReducers({
  vote
});

export default rootReducer;
