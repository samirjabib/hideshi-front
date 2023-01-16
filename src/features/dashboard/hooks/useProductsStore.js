import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, onAddProduct, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";
import { useEffect, useState } from "react";

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products, isOpenProduct } = useSelector( state => state.products )
    

    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }



    const addProduct = async(productData) => {
        console.log(productData)
        // dispatch(checkingStatus())
        // try {
        //     const { data } = await hideshiApi.post('/product', productData)
        //     console.log(data)
        //     // dispatch(onAddProduct(data))
        // } catch (error) {
        //     console.log(error)
        // }

    }


    return {
        //Propierties
        products,
        isOpenProduct,
        
        setProductModal,
        addProduct,
        
    }
}