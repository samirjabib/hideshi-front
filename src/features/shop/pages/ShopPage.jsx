import { useEffect, useState } from "react";

import { useProductsStore } from "../../dashboard";
import { ProductsList } from "../components";



export const ShopPage = () => {

   const { products ,startLoadingProducts } = useProductsStore();

   const  [open, setOpen ] = useState(true)


    const timeToStartAD = () => {
      
    
    }


   useEffect( () => {
        setTimeout( () => {
            setOpen(false)
        }, 4000)
   }, [])
 
   
    useEffect(() => {
        startLoadingProducts();
    },[products])

    return(
        <div className=" w-full">
            <div 
                data-aos='fade-up'
                data-aos-duration="5000"
                className={`bg-bg_dark_primary fixed text-bg_light_primary w-ful text-sm text-center h-24 flex items-center justify-center z-[999] transition-all duration-200 animate-bounce w-full ${open ? 'top-0' : 'top-[-100%] g'}`}>No te pierdas de nuestras promociones en envios! 🔥</div>
            <ProductsList products ={products}/>
        </div>
    )
}