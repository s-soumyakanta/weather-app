import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./Slices/locationSlice";
import weatherSlice from "./Slices/weatherSlice";
import forecastSlice from "./Slices/forecastSlice";
import mapSlice from "./Slices/mapSlice";
import placeNameSlice from "./Slices/placeNameSlice";

const store = configureStore({
    reducer:{
        location:locationSlice,
        weather:weatherSlice,
        forecast:forecastSlice,
        map:mapSlice,
        placeName:placeNameSlice

    }
})

export default store;