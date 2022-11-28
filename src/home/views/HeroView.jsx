import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { heroBackgrounds } from "../../assets";

export const Hero = () => {

    let count = 0;
    let slideInterlval;



   

    return (
        <Fragment>
            
            
                {
                    heroBackgrounds.map( background => {
                        return(
                            <div className="relative shadow-xl" key={background.id}>

                                <img src={background.image} className='w-full h-screen object-cover' />
                                <h1 className="absolute text-white font-bold text-9xl top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[50%] tracking-wide ">Hideshi</h1>

                                <div className= "absolute top-[50%] bottom-[50%] justify-center items-center flex-col md:flex-row flex w-full  h-32 gap-6">
                                <Link to='/shop'>
                                    <button className="bg-[#2b2d42] px-12 py-4 text-2xl  text-white font-semibold w-52 shadow2xl rounded-2xl  hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        Tienda
                                    </button>
                                </Link>  
                                    <button className="bg-[#ffc300] px-12 py-4 text-2xl  w-52 shadow2xl rounded-2xl hover:text-[#2b2d42] hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <h2 className="text-[#edf2f4] font-bold">Colección</h2>   
                                    </button>                         
                                </div>

                            </div>

                        )
                    })
                }
        </Fragment>
    );
};
