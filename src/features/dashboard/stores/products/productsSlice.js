import { createSlice } from "@reduxjs/toolkit";
import { dummieData } from "../../../shop";


export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        products:dummieData,
        isOpenProduct:false,
        categories:[]
    },
    reducers:{
        checkingStatus : (state) => {
            state.isLoading = true
        },
        openProductModal: (state, { payload }) => {
            state.isOpenProduct = payload;
        },
        onAddProduct: (state, { payload }) => {
            console.log(payload, 'payload on the reducer')
            state.isLoading = false
            state.products.push(payload)
        },
    }
});



export const { openProductModal, onLoadingProducts,  checkingStatus, onAddProduct } = productSlice.actions;


