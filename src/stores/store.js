import { productSlice, shopSlice } from "../features";
import { hideshiApi } from "./apis";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const persistConfig = {
    key:'root',
    storage,
    whilelist:['shop']
}

const reducer = combineReducers({
    products:productSlice.reducer,
    shop:shopSlice.reducer,

    [hideshiApi.reducerPath]:hideshiApi.reducer,
})

const persistedReducer = persistReducer( persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }).concat(hideshiApi.middleware),
});

export const persistor = persistStore(store)