import { combineReducers } from "redux";
import reducers from "./reducers";

const allReducer = combineReducers({
  list: reducers,
});

export default allReducer;
