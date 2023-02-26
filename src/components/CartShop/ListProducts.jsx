import { Card } from "./Card"


export const ListProducts = ( { products }) => {

    return(
        <div className="h-[70%] w-full">
            { products.map( ( product, index) => {
                return(
                    <div className="flex flex-col p-2" key={index}>
                        <Card product={product} key={product.id}/>
                        <span className="border bg-text_dark_primary mt-2 w-full"></span>
                    </div>

                )
            })}
        </div>

    )
}