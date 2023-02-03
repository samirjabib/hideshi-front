import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MaterialSpecifications, Sizes } from "../components";
import { useShopStore } from "../hooks";
import { getProductById } from "../utils";



const sizes = [
    {
        id:0,
        display:'xs',
    },
    {
        id:1,
        display:'s',
    },
    {
        id:2,
        display:'l',
    },
    {
        id:3,
        display:'xl',
    },
    {
        id:4,
        display:'xxl',
    },
]

export const ProductDetailPage = () => {


    const { id } = useParams();
    const [ size, setIsSelected ] = useState(null);
    const {  onHandleAddToCart  } = useShopStore()

    const product = useMemo( () => getProductById( id ), [id])
    const {  name, img, price, } = product 

    const item = {
        id,
        name,
        img,
        price,
        size,
    }

    const onSubmitProduct = () => {
        if(size === null){
            return  alert('Selecciona una talla para la prenda')
            
        } else {
            
            onHandleAddToCart(item)
        }
        console.log(item)
    }

    return(
        <div className=" w-full p-4 flex flex-col md:flex-row md:justify-center h-auto mx-auto container mt-24">
            <img src={img} className=' black h-3/6 object-contain md:object-cover '/>
            <div className=" h-full flex flex-col p-4  mt-4  md:mt-16 md:ml-12">
                <h2 className="uppercase font-bold font-sans text-xs">{name}</h2>
                <span className="font-sans text-[.8rem] mt-4 ">COP{price}</span>
                <div className="flex flex-col">   
                    <Sizes sizes={sizes} isSelected={size} setIsSelected={setIsSelected}/>
                        <button 
                            className="bg-black w-full  text-sm uppercase py-4 shadow text-gray-200 mt-4" 
                            onClick={onSubmitProduct}
                        >
                            add to bag
                        </button>

                        <button 
                            className="bg-bg_light_primary border border-bg_dark_primary mt-4 w-full transition-all duration
                             text-sm uppercase py-4 shadow text-bg_dark_primary 
                            hover:bg-bg_dark_primary hover:text-bg_light_primary" 
                        >
                            <Link to='/shop/checkout'>CHECKOUT</Link>
                        </button>
                </div>
                <MaterialSpecifications/>
            </div>
        </div>
    )
};