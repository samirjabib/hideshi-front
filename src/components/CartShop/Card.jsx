export const Card = ( { product }) => {
    console.log(product)
    const { id, name, img, price, quantity = 4 , category='coleccion', } = product

    const priceNumber = parseFloat(price)

    const total = quantity * priceNumber;

    return(
        <div className="gap-2 flex flex-row p-2 mt-8">
            <img src={img} alt={name} className='w-[35%] object-contain shadow'/>
            <div className="w-[75] flex flex-col">
                <p>{name}</p>
                <span>{category}</span>
                <div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <button>--</button>
                            <span>{quantity}</span>
                            <button>+</button>
                        </div>

                        <div className="text-sm text-text_gray_for_span">COP <span className="text-black">{total}K</span> </div>
                    </div>
                </div>
            </div>
 
        </div>
    )
}