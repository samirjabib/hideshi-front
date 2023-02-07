import { useProductsStore } from "../../dashboard";



export const getProductById = ( id ) => {

    const { products} = useProductsStore()

    const productId = parseInt(id)

    const product = products.find( product => product.id === productId)

    return product


}