


const ProductCard = ({product}) => {

    const { id, name, img, price } = product

  
    
    return (
        <div className='h-72 lg:h-96 flex flex-col cursor-pointer '>
            <img 
                src={img}
                alt="image"
                className=" w-full h-[80%] flex items-center justify-center object-cover "
            />
            <div className=" w-full h-[20%] flex-col text-center justify-between p-2 items-center k">
                <h2 className="font-bold text-sm">{name}</h2>
                <span className="text-[.8rem]">COP{price}</span>
        </div>
            

        </div>
    );
};

export default ProductCard;