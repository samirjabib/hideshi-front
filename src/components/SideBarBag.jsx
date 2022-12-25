import { AiOutlineClose } from "react-icons/ai"
import { CartShop } from "./CartShop"

export const SideBarBag = ( {onHandleBag, openBag}) => {

    return(
        <div className={`fixed left-0 top-0 w-11/12 overflow-scroll max-w-[18rem] h-screen  bg-bg_light_primary z-[999] 
            transition-all duration-300 flex-col flex p-4
        ${openBag ? 'left-0': 'left-[-100%]'} `}>
            <div className="w-[15.7rem] flex fixed flex-row justify-between  mb-2 bg-bg_light_primary top-0 h-12 py-4">
                <h6 className=" text-sm font-semibold flex flex-row self-end">SHOPPING BAG</h6>
                <AiOutlineClose 
                        className={`self-end font-bold `} 
                        onClick={ onHandleBag }
                        size={22}
                />

            </div>
            <span className="border border-black/30 mt-10 w-full"></span>
            <CartShop/>
        </div>
    )
}