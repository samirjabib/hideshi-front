import { Card } from "./Card"


export const ListProducts = ( { products }) => {

    console.log(products)

    return(
        <div className="h-[70%] w-full">
            { products.map( ( product) => {
                return(
                    <div className="flex flex-col p-2">
                        <Card product={product}/>
                        <span className="border border-gray-600 mt-10 w-full"></span>
                    </div>

                )
            })}
        </div>

    )
}