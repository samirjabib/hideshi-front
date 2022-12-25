export const Card = ( { product }) => {
    console.log(product)
    const { id, name, img, price, quantity = '', category='coleccion'} = product

    return(
        <div className="gap-2 flex flex-row border-2 border-black p-2">
            <img src={img} alt={name} className='w-[35%] object-contain'/>
            <div>
                <p>{name}</p>
                <span>{category}</span>
                <div>
                    <div>
                        <button>--</button>
                        <span>total</span>
                        <button>+</button>
                    </div>
                    <span>{price}</span>
                </div>
                <span>{quantity}</span>
            </div>
 
        </div>
    )
}