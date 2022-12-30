import { useProductsStore, useShopStore } from "../../features"
import { ListProducts } from "./ListProducts"

export const CartShop = () => {

    const { products } = useProductsStore();
    const { cartItems } =  useShopStore();


    console.log(cartItems)
    

    
    return(
        <div className=" bg-bg_light_primary overflow-scroll h-[70%]">
            <ListProducts products = { cartItems }/>
        </div>
    )
}