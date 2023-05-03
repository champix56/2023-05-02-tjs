import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modal";


export default createStore(combineReducers({modal:modalReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())