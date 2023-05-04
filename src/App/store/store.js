import { createStore, configureStore, combineReducers } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import memeReducer from "./meme";
// const store = createStore(combineReducers({ ressources: ressourcesReducer}));
const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    meme: memeReducer,
  }),
  devTools: true,
});

export default store;
