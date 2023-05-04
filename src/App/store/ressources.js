import { assertConditional } from "@babel/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images.splice(0);
      state.images.push(...action.payload);
    },
    addMemes: (state, action) => {
      state.memes.splice(0);
      state.memes.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase("ressources/fetchImages/fulfilled", (state, action) => {
      state.images.splice(0);
      state.images.push(action.payload);
    })
    .addCase("ressources/fetchMemes/fulfilled",(state,action)=>{
      state.memes.splice(0);
      state.memes.push(action.payload);
    })
    .addDefaultCase((state,action)=>{
      console.log(action);
    })
  },
});
export const fetchImage = createAsyncThunk(
  "ressources/fetchImages",
  async (state, action) => {
    const promiseFetch = await fetch("http://localhost:5679/images");
    return await promiseFetch.json();
  }
);
export const fetchMeme = createAsyncThunk(
  "ressources/fetchMemes",
  async (state, action) => {
    const promiseFetch = await fetch("http://localhost:5679/memes");
    return await promiseFetch.json();
  }
);
export const { addImages, addMemes } = ressources.actions;

export default ressources.reducer;
