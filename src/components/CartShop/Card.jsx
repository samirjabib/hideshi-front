import { ToastContainer } from "react-toastify";
import { useShopStore } from "../../features";

export const Card = ( { product }) => {

    const {onHandleAddToCart, onHandleDecrementItemInCart, onHandleIncrementCount} = useShopStore()

    const {  name, img, price , quantity, category } = product


    const priceNumber = parseFloat(price);

    const total = quantity * priceNumber;


    return(
        <div className="gap-2 flex flex-row-reverse justify-between p-2 mt-8">
            <img src={img} alt={name} className='w-[35%] object-contain'/>
            <div className="w-[75] flex flex-col ml-4 mt-2">
                <p className="text-xs uppercase w-full font-semibold">{name}</p>
                <span className="text-[.7rem] text-text_gray_for_span font-serif w-full">{category}</span>
                <div className=" p-4">
                    <div className="flex flex-row justify-between mt-4">
                        <div className=" flex items-center gap-2">
                            <button 
                                className="text-2xl text-text_gray_for_span"
                                onClick={() =>onHandleDecrementItemInCart (product)}
                            >
                                -
                            </button>
                            <span className="text-xs  text-bg_dark_primary p-2">{quantity}</span>
                            <button 
                                className="text-base text-text_gray_for_span"
                                onClick={ () => onHandleIncrementCount(product)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-xs text-bg_dark_primary self-start"> Total: COP<span>{total}</span></div>
            </div>
            <ToastContainer/>
 
        </div>
    )
}