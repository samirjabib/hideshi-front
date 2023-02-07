import { useProductsStore, useShopStore } from "../../features"
import { ListProducts } from "./ListProducts"

export const CartShop = () => {

    const { cartItems } =  useShopStore();

    return(
        <div className=" bg-bg_light_primary overflow-scroll h-[70%]">
            <ListProducts products = { cartItems }/>
        </div>
    )
}