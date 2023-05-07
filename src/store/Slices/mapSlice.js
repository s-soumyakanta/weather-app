import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name:"mapSlice",
    initialState:[],
    reducers:{
        locateAreaOnMap(state,action){
            state.splice(0,state.length,action.payload)
        }
       
    }
})


export const {locateAreaOnMap} = mapSlice.actions;
export default mapSlice.reducer;