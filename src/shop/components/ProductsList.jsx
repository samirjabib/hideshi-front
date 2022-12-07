import ProductCard from "./ProductCard"

export const ProductsList = ({ products }) => {
    console.log(products,'products in the Product List for props in here jeje')

    return(
        <div className=" h-full grid grid-cols-2 gap-2 mx-2  md:grid-cols-4">
            <ProductCard/>
        </div>
    )
    
}