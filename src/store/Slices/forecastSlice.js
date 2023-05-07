import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "./locationSlice";
import { OPEN_WEATHER_API_KEY,OPEN_WEATHER_API_URL } from "../../api";
export const fetchForcast = createAsyncThunk("forecast",async(value)=>{
    const {lat,lon} = value
    const res = await fetch(`${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
    const data = res.json()
    return data;
})

const  initialState ={
    data:[],
    status:STATUSES.IDLE,
   
}
const forecastSlice = createSlice({
    name:"forecastSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
           .addCase(fetchForcast.pending,(state,action)=>{
            state.status = STATUSES.LOADING
           })
           .addCase(fetchForcast.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.IDLE
           })
           .addCase(fetchForcast.rejected,(state,action)=>{
            state.status = STATUSES.ERROR
           })
    }
})

export default forecastSlice.reducer