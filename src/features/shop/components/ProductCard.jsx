import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {


    const { id, name, productImgs, price } = product
    console.log(id)


    const navigate = useNavigate();

    const productImg = productImgs.map( img => img.imgUrl)
    
    return (
        <div className=' cursor-pointer transition-transform duration-200 hover:scale-95'>
            <img 
                src={productImg}
                alt="image"
                className=" w-full h-[80%] flex items-center justify-center object-contain"
                onClick={ () => navigate(`/shop/${id}`)}
            />
            <div className=" w-full flex-col text-center flex justify-center items-center uppercase h-[20%] ">
                <h2 className="font-bold text-sm transition-all hover:border-b w-40 ">{name}</h2>
                <span className="text-[.8rem] mb-8">COP{price}</span>  
        </div>

        </div>
    );
};
