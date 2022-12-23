import { dummieData } from "../assets";



export const getProductById = ( id ) => {

    const productId = parseInt(id)

    const product = dummieData.find( product => product.id === productId)

    return product


}