import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { OPEN_WEATHER_API_KEY,OPEN_WEATHER_API_URL } from "../../api";
import { STATUSES } from "./locationSlice";


export const fetchWeather = createAsyncThunk("weather",async (value)=>{
    const {lat,lon} = value
    const res = await fetch(
              `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
              
            )
    const data = await res.json();
    return data;
})



const  initialState ={
    data:[],
    status:STATUSES.IDLE,
   
}
const weatherSlice = createSlice({
    name:"locationSlice",
    initialState,
    reducers:{
       

    },
    extraReducers:(builder)=>{
        builder
         .addCase(fetchWeather.pending,(state,action)=>{
            state.status = STATUSES.LOADING
         })
         .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.IDLE
         })
         .addCase(fetchWeather,(state,action)=>{
            state.status = STATUSES.ERROR
         })

    }
})

export default weatherSlice.reducer;
