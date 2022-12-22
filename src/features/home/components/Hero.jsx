import { Fragment } from "react";
import { Link } from "react-router-dom";

import { heroBackgrounds } from "../assets";

export const Hero = () => {

    return (
        <Fragment>
            
            
                {
                    heroBackgrounds.map( background => {
                        return(
                            <div className="shadow-xl " key={background.id}>

                                <img src={background.image} className='w-full h-screen object-cover' />
                                <h1 className="absolute text-gray-200 font-bold text-7xl sm:text-8xl md:text-9xl top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[50%] tracking-wide ">HIDESHI</h1>

                                <div className= "absolute top-[55%] bottom-[50%] justify-center items-center flex-col md:flex-row flex w-full  h-32 gap-6">
                                <Link to='/shop'>
                                    <button className="border-2  px-12 py-4 text-2xl  text-white font-semibold w-52 shadow2xl rounded-2xl  hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        Tienda
                                    </button>
                                </Link>  
                                    <button className="border-2 px-12 py-4 text-2xl  w-52 shadow2xl rounded-2xl hover:text-[#2b2d42] hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <a href="#categories-list" className="text-[#edf2f4] font-bold">Colección</a>   
                                    </button>                         
                                </div>

                            </div>

                        )
                    })
                }
        </Fragment>
    );
};
