import { createStore, configureStore, combineReducers } from "@reduxjs/toolkit";
import ressourcesReducer, { fetchImage, fetchMeme } from "./ressources";
import memeReducer from "./meme";
// const store = createStore(combineReducers({ ressources: ressourcesReducer}));
const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    meme: memeReducer,
  }),
  devTools: true,
});

store.dispatch(fetchImage());
store.dispatch(fetchMeme());
export default store;
