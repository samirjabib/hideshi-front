import { productSlice, shopSlice, authSlice } from "../features";

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
    auth:authSlice.reducer,

})

const persistedReducer = persistReducer( persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});

export const persistor = persistStore(store)