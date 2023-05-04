import { createSlice } from "@reduxjs/toolkit";
import {emptyMeme} from 'orsys-tjs-meme'
const initialState=emptyMeme;
const memes = createSlice({
  name: "meme",
  initialState,
  reducers: {
    changeMeme:(state,action)=>{
      state=action.payload;
    },
    clearMeme:(state)=>{
      state=emptyMeme;
    }
  },
});

export const {changeMeme,clearMeme} = memes.actions;

export default memes.reducer;
