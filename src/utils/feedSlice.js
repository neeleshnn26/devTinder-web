import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
      addFeed:(state,action)=>{
       return action.payload
       //If addFeed is intended to append to the feed instead of overwriting it, 
       // use state.push for mutation (Redux Toolkit uses Immer under the hood to handle immutability)
      },
      removeFeed:()=>{
        return null
      }
    }
})
export const {addFeed}=feedSlice.actions
export default feedSlice.reducer