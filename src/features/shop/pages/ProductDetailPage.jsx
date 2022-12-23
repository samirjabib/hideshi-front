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
            <div className=" h-full flex flex-col p-4">
                <h2 className="mt-6 uppercase font-bold font-sans text-xs">{name}</h2>
                <span className="font-sans text-[.8rem] mt-4 ">COP{price}</span>
                <option className="mt-4 flex flex-row w-10/12 justify-between text-center uppercase ">
                    <div className="border border-black text-base py-[.5em] px-4 ">xs</div>


                </option>
                <button className="bg-black w-full text-bg_light_primary text-sm uppercase p-[1em] shadow">add to bag</button>
            </div>

        </div>
    )
};