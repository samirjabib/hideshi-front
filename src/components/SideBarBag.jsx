import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { CartShop } from "./CartShop"

export const SideBarBag = ( {onHandleBag, openBag}) => {
    
    const navigate = useNavigate() 

    const checkoutHandle = () => {
        navigate('shop/checkout')
    }

    return(
        <div 
            className={`fixed left-0 top-0 w-11/12  max-w-[18rem] h-screen overflow-scroll bg-bg_light_primary shadow-2xl  z-[999] 
            transition-all duration-300 flex-col flex p-4
            ${openBag ? 'left-0': 'left-[-100%]'} `}
        
        >
            <div className="w-[15.7rem] flex fixed flex-row justify-between mb-2 bg-bg_light_primary top-0 h-12 py-4 z-[999] mt-4">
                <h6 className=" text-sm font-semibold flex flex-row self-end">SHOPPING BAG</h6>
                <AiOutlineClose 
                        className={`self-end font-bold `} 
                        onClick={ onHandleBag }
                        size={22}
                />
            </div>
            <span className="border bg-text_gray_for_span mt-14 w-full "></span>
            <CartShop/>

            <button 
                className="border-2 border-black mt-12 text-bg_light_primary bg-bg_dark_primary text-sm font-bold py-2"
                onClick={checkoutHandle}    
            >
                CHECKOUT
            </button>

            <span className="border bg-text_gray_for_span mt-10 w-full"></span>
       
            <p className="mt-8 text-[12px] uppercase font-700">¡¡no te pierdas nuestras promociones!!</p>
            <input className="w-full border-b p-2  text-sm outline-none border-black mt-2 " placeholder="E-mail"/>
            <button className="border border-black mt-4  bg-text_dark_primary text-sm font-bold py-2 uppercase font-400 shadow transition-all duration-300 hover:bg-black hover:text-white">Suscribe</button>
        
        </div>
    )
}