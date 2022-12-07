import { ProductsList } from "../components"
import { useProductsStore } from "../../dashboard"
import { useEffect } from "react";



export const Shop = () => {

   const { products ,startLoadingProducts } = useProductsStore();
   
    useEffect(() => {
        startLoadingProducts();
    },[products])

    return(
        <div className=" w-full h-screen relative top-20">
            <ProductsList products ={products}/>
        </div>
    )
}