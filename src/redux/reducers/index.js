import { combineReducers } from "redux";
import auth from "./auth";
import homeList from './homeList';
import themeReducer from './themeReducer'


export default combineReducers({
    auth,
    homeList,
    themeReducer,
})