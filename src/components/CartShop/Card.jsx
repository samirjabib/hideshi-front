import { useShopStore } from "../../features";

export const Card = ( { product }) => {

    const {onHandleAddToCart, onHandleDecrementItemInCart} = useShopStore()

    const { id, name, img, price , quantity, category } = product

    console.log(quantity)

    const priceNumber = parseFloat(price);

    const total = quantity * priceNumber;


    return(
        <div className="gap-2 flex flex-row-reverse justify-between p-2 mt-8">
            <img src={img} alt={name} className='w-[35%] object-contain'/>
            <div className="w-[75] flex flex-col ml-4 mt-2">
                <p className="text-[.7rem] uppercase w-full font-semibold">{name}</p>
                <span className="text-[.7rem] text-text_gray_for_span font-serif w-full">{category}</span>
                <div>
                    <div className="flex flex-row justify-between mt-4">
                        <div className=" flex items-center gap-2">
                            <button 
                                className="text-[.6rem] text-text_gray_for_span"
                                onClick={() =>onHandleDecrementItemInCart (product)}
                            >
                                -
                            </button>
                            <span className="text-[.7rem]">{quantity}</span>
                            <button 
                                className="text-[.6rem] text-text_gray_for_span"
                                onClick={ () =>onHandleAddToCart(product)}
                            >
                                +
                            </button>
                        </div>

                        <div className="text-[.7rem] text-bg_dark_primary flex items-center"> $<span>{total}</span></div>
                    </div>
                </div>
            </div>
 
        </div>
    )
}