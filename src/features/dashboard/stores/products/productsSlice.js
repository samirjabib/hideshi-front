import { createSlice } from "@reduxjs/toolkit";
import { dummieData } from "../../../shop";





export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoadingProducts:true,
        products:dummieData,
        page:0,
        isOpenModalProduct:false,
    },
    reducers:{
        openProductModal: (state, { payload }) => {
            state.isOpenModalProduct = payload;
        },
        onAddProduct: (state, { payload }) => {
            console.log(payload, 'payload on the reducer')
            state.isLoadingProducts = false,
            state.products.push(payload)
        },
    }
});



export const { onSetProducts, onLoadingProducts } = productSlice.actions;


