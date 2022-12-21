import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/";


export const store = configureStore({
    reducer:{
        products:productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});