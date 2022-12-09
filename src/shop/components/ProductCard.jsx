


const ProductCard = ({product}) => {

    const { id, name, img, price } = product

  
    
    return (
        <div className='lg:h-96 block cursor-pointer border border-black'>
            <img 
                src={img}
                alt="image"
                className=" w-full h-[80%] flex items-center justify-center object-contain border-2 border-black p-2 "
            />
            <div className=" w-full h-[20%] flex-col text-center justify-between p-2 items-center border-2 border-black">
                <h2 className="font-bold text-sm">{name}</h2>
                <span className="text-[.8rem]">COP{price}</span>
        </div>
            

        </div>
    );
};

export default ProductCard;