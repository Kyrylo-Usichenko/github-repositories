import {combineReducers} from "redux";
import reposReducer from "./reposReducer";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";


const  rootReducer = combineReducers({
    reposReducer,
})
export const store = configureStore({ reducer: rootReducer, middleware: [thunk] })


