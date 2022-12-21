import { ProductCard } from "./ProductCard"

export const ProductsList = ({ products }) => {

    return(
        <div className=" grid grid-cols-2 gap-4 mx-2 md:grid-cols-4">
            { products.map( product => {
                return(
                    <ProductCard product={product} /> 
                )
            })}
        </div>
    )
    
}