import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/products/productsSlice";

export const store = configureStore({
    reducer:{
        products:productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});