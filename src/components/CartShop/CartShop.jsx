import { ListProducts } from "./ListProducts"

export const CartShop = ({ products }) => {

    return(
        <div className="border-2 border-black">
            <ListProducts products = { products }/>
        </div>
    )
}