import { ProductsList } from "../components"
import { useProductsStore } from "../../dashboard"
import { useEffect } from "react";



export const ShopPage = () => {

   const { products ,startLoadingProducts } = useProductsStore();
   
    useEffect(() => {
        startLoadingProducts();
    },[products])

    return(
        <div className=" w-full">
            <ProductsList products ={products}/>
        </div>
    )
}