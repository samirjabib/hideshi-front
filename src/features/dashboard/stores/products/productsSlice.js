import { createSlice } from "@reduxjs/toolkit";
import { dummieData } from "../../../shop";

export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:true,
        products:dummieData,
        isOpenProduct:false,
    },
    reducers:{
        openProductModal: (state, { payload }) => {
            state.isOpenProduct = payload;
        },
        onAddProduct: (state, { payload }) => {
            console.log(payload, 'payload on the reducer')
            state.isLoading = false,
            state.products.push(payload)
        },
    }
});



export const { openProductModal, onLoadingProducts } = productSlice.actions;


