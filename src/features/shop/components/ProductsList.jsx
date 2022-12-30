import { ProductCard } from "./ProductCard"

export const ProductsList = ({ products }) => {




    




    return(
        <div className="container mx-auto">
            <div className=" grid grid-cols-2 gap-4  md:grid-cols-4 b   mt-24">
                { products.map( product => {
                    return(
                        <ProductCard key={product.id} product={product}  /> 
                    )
                })}
             </div>
        </div>
    )
    
}