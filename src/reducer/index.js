import { combineReducers } from "redux";
import {listallsearchdetails} from "../Components/Reducers";
const allReducer = combineReducers({
  ListResults : listallsearchdetails
})
export default allReducer;