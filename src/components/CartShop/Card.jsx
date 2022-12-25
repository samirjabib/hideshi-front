export const Card = ( { product }) => {
    console.log(product)
    const { id, name, img, price, quantity = ''} = product

    return(
        <div>
            <img src={img} alt={name}/>
            <div>
                <p>{name}</p>
                <span>{price}</span>
                <div>
                    <button>-1</button>
                    <button>1</button>
                </div>
    
                <span>{quantity}</span>
            </div>
 
        </div>
    )
}