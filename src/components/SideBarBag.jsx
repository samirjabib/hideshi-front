import { AiOutlineClose } from "react-icons/ai"
import { CartShop } from "./CartShop"

export const SideBarBag = ( {onHandleBag, openBag}) => {

    return(
        <div className={`border-2 border-black fixed left-0 top-0 w-7/12 max-w-[18rem] h-screen  bg-bg_light_primary z-[999] 
            transition-all duration-300 flex-col flex p-4
        
        ${openBag ? 'left-0': 'left-[-100%]'} `}>
        
        <AiOutlineClose 
                className={`self-end border-2 border-black `} 
                onClick={ onHandleBag }
                size={24}
        />

        <span className="border border-black/30 mt-2"></span>
        <CartShop/>



        </div>
    )
}