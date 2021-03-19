import { combineReducers } from "redux";
import auth from "./auth";
import homeList from './homeList'


export default combineReducers({
    auth,
    homeList
})