import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, openProductModal, fetchProducts } from "../stores";
import { hideshiApi } from "../../../api";
import hideshiApiFormData from "../../../api/hideshiApiFormData";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const useProductsStore = () => {


    

    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )

    // dispatch(checkingStatus(true))
    // dispatch(checkingStatus(false))

    const getProducts = async() => {
        try {
            const { data } = await hideshiApi.get("/product")
            dispatch(fetchProducts(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getProducts()
   },[])
    



    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }

    const addProduct = async (productData) => {
        console.log(productData)
        dispatch(checkingStatus())
        try{
            const { data } = await hideshiApiFormData.post('/product', productData)
            console.log(data)
            if(data){
                dispatch(openProductModal(!isOpenProduct))
                toast.success('producto añadido correctamente' )
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
 
    }

    const removeProduct = async (id) => {
        dispatch(checkingStatus())
        try{
            const { data } = await hideshiApiFormData.post('/product/id', id )
            if(data){
                dispatch(openProductModal(!isOpenProduct))
            }
        }catch(error){
            console.log(error)
        }
 
    }

    return {
        //Propierties
        products,
        isOpenProduct,
        getProducts,
        
        setProductModal,
        addProduct,
        
    }
}