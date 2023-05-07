import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {GEODB_API_URL,geoDbOptions} from "../../api";

export const fetchLocations = createAsyncThunk("locations",async (value)=>{
    const res = await fetch(
        `${GEODB_API_URL}/cities?minPopulation=10&namePrefix=${value}`,
        geoDbOptions
      )
    const data = await res.json();
    return data.data;
})

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const  initialState ={
    data:[],
    status:STATUSES.IDLE,
    locationDetail:[],
    
    
   
}
const locationSlice = createSlice({
    name:"locationSlice",
    initialState,
    reducers:{
        getLocationDetail(state,action){
            
            state.locationDetail.splice(0,0,action.payload)
        }

    },
    extraReducers:(builder)=>{
        builder
         .addCase(fetchLocations.pending,(state,action)=>{
            state.status = STATUSES.LOADING
         })
         .addCase(fetchLocations.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.IDLE
         })
         .addCase(fetchLocations,(state,action)=>{
            state.status = STATUSES.ERROR
         })

    }
})

export default locationSlice.reducer;
export const {getLocationDetail} = locationSlice.actions
