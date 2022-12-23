import { configureStore } from "@reduxjs/toolkit";
import { productSlice, shopSlice } from "../features/";


export const store = configureStore({
    reducer:{
        products:productSlice.reducer,
        shop:shopSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});