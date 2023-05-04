import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    memes:[],
    images:[]
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addImages:(state,action)=>{
        state.images.push(...action.payload);
    },
    addMemes:(state,action)=>{
        state.memes.push(...action.payload);
    }
  }
});

export const {addImages,addMemes} = ressources.actions

export default ressources.reducer