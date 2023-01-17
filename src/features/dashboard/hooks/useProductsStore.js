import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, onAddProduct, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )
    

    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }


    const config = {
        headers:{
            "Content-Type":"multipart/form-data",
        },
    }

    const addProduct = async (productData) => {
        console.log(productData)
        dispatch(checkingStatus())
        try{
            const { data } = await hideshiApi.post('/product', productData, config)
            console.log(data)
        }catch(error){
            console.log(error)
        }
 
    }


    return {
        //Propierties
        products,
        isOpenProduct,
        
        setProductModal,
        addProduct,
        
    }
}