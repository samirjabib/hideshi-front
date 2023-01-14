import { useDispatch, useSelector } from "react-redux"
import { openProductModal } from "../stores";

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products, isOpenProduct } = useSelector( state => state.products )


    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }

    const addProduct = (productData) => {
        console.log(productData)

    }


    return {
        //Propierties
        products,
        isOpenProduct,
        
        setProductModal,
        addProduct,
        
    }
}