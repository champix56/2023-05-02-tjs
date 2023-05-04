import { createSlice } from "@reduxjs/toolkit";
import {emptyMeme} from 'orsys-tjs-meme'
const memes = createSlice({
  name: "meme",
  emptyMeme,
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
