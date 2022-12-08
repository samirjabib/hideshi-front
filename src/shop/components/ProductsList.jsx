import ProductCard from "./ProductCard"

export const ProductsList = ({ products }) => {

    return(
        <div className=" h-full grid grid-cols-2 gap-2 mx-2  md:grid-cols-4">
            { products.map( product => {
                return(
                    <ProductCard product={product} /> 
                )
            })}
        </div>
    )
    
}