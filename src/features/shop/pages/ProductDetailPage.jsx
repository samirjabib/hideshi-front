import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils";

export const ProductDetailPage = () => {

    const { id } = useParams();
    

    const product = useMemo( () => getProductById( id ), [id])
    console.log(product)

    const {  name, img, price } = product

    return(
        <div className=" w-full p-4 md:flex md:justify-center h-screen">
            <img src={img} className=' black h-4/6 object-contain'/>
            <div className=" h-full flex flex-col p-4  md:mt-16 md:ml-12">
                <h2 className="mt-2 uppercase font-bold font-sans text-xs">{name}</h2>
                <span className="font-sans text-[.8rem] mt-4 ">COP{price}</span>
                <option className="mt-4 flex flex-row w-10/12 justify-between text-center uppercase my-4 font-medium gap-2 ">
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 ">xs</div>
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 ">s</div>
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 ">m</div>
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 ">l</div>
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 ">xl</div>
                    <div className="border-[1.3px] border-gray-300 text-xs py-4 px-4 w-12 flex justify-center items-center ">xxl</div>
                </option>
                <button className="bg-black w-full  text-sm uppercase p-[1em] shadow text-gray-200">add to bag</button>
            </div>

        </div>
    )
};