import { useEffect } from "react";

import { useProductsStore } from "../../dashboard";
import { ProductsList } from "../components";



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