import { createSlice } from "@reduxjs/toolkit";

const placeNameSlice = createSlice({
    name:'placeNameSlice',
    initialState:[],
    reducers:{
        geoDbPlaceName(state,action){
            state.splice(0,state.length,action.payload)
        },
        makePlaceNameEmpty(state,action){
            state.splice(0,state.length)
        }
    }
})

export const {geoDbPlaceName, makePlaceNameEmpty} = placeNameSlice.actions;
export default placeNameSlice.reducer;