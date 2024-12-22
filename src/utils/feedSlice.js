import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:[],
    reducers:{
      addFeed:(state,action)=>{
       return action.payload
       //If addFeed is intended to append to the feed instead of overwriting it, 
       // use state.push for mutation (Redux Toolkit uses Immer under the hood to handle immutability)
      },
      removeUserFromFeed:(state,action)=>{
        const newFeed= state.filter((user)=>user._id != action.payload)
        return newFeed
      }
    }
})
export const {addFeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer