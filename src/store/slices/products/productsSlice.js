import { createSlice } from "@reduxjs/toolkit";
import { dummieData } from "../../../assets";






export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoadingProducts:true,
        products:dummieData,
        page:0,
    },
    reducers:{
        onAddProduct: (state, { payload }) => {
            console.log(payload, 'payload on the reducer')
            state.isLoadingProducts = false,
            state.products.push(payload)
        },
    }
});



export const { onSetProducts, onLoadingProducts } = productSlice.actions;


