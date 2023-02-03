import { assets } from "../../assets"

export const GetEmail  = () => {
    return(
        <div className="flex flex-col items-center justify-center content-end text-center  relative top-[30%] gap-2 w-full">
            <p className="uppercase font-serif text-lg mb-4 font-semibold">¡¡No te pierdas de nuestras promociones!!</p>
            <input placeholder="E-MAIL" className=" p-2 border-b border-black w-full text-sm focus:outline-none" />
            <button className="mt-4 border-2 border-black w-full bg-bg_dark_primary text-bg_light_primary font-serif font-bold text-lg p-[.2em]">Suscribete</button>
            <img 
                src={assets.logo}
                className='w-44'
            />
        </div>
    )
}