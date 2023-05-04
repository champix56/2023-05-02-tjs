import { createStore, configureStore, combineReducers } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
// const store = createStore(combineReducers({ ressources: ressourcesReducer}));
const store=configureStore({
    reducer:combineReducers({ressources:ressourcesReducer}),
    devTools:true
});


export default store;