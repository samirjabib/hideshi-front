import { Card } from "./Card"


export const ListProducts = ( { products }) => {

    console.log(products)

    return(
        <div className="">
            { products.map( ( product) => {
                return(
                    <Card product={product}/>
                )
            })}
        </div>

    )
}