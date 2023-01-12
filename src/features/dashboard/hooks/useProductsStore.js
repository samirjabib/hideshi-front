import { useDispatch, useSelector } from "react-redux"
import { openProductModal } from "../stores";

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products, isOpenProduct } = useSelector( state => state.products )


    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }


    return {
        //Propierties
        products,
        isOpenProduct,
        
        setProductModal,
        
    }
}