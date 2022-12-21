
export const ProductCard = ({product}) => {

    const { id, name, img, price } = product

  
    
    return (
        <div className=' cursor-pointer transition-transform duration-200 hover:scale-105'>
            <img 
                src={img}
                alt="image"
                className=" w-full h-[80%] flex items-center justify-center object-contain "
            />
            <div className=" w-full flex-col text-center flex justify-center items-center uppercase h-[20%] ">
                <h2 className="font-bold text-sm transition-all hover:border-b w-40  ">{name}</h2>
                <span className="text-[.8rem] mb-8">COP{price}</span>
        </div>
            

        </div>
    );
};
