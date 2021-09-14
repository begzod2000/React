import {combineReducers} from "redux"
import authReducer from "./Action/Reducer/authReducer";
import authRegistter from "./Action/Reducer/authRegistter";
import modalReducer from "./Action/Reducer/modalReducer";
import usersReducer from "./Action/Reducer/usersReducer";
import reytingReducer from "./Action/Reducer/reytingReducer";


export const  rootReducer = combineReducers ({
    authReducer,
    authRegistter,
    modalReducer,
    usersReducer,
    reytingReducer,

});