import { useState } from "react";

import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { getLinksToNavBar } from "../utils/";
import { useRef } from "react";





export const Header = ({auth}) => {

    const [ open, setOpen ] = useState(false)
    const menuRef = useRef()
        
    const navLinks = getLinksToNavBar(auth)
    console.log(navLinks)






    return (
        <header className= {`absolute h-20 flex flex-col  justify-center p-4 w-full top-0 z-50`}>
            <nav className=" w-full flex justify-between h-16 p-2 items-center ">

                <h2 className="md:hidden">
                    <Link className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center" to='/'>HIDESHI</Link>
                </h2>

                <Link to='/' className="flex flex-row"> 
                    <img src="" alt="LOGO" className="self-center  border-2 border-black w-16 h-12 flex items-center justify-center"/>
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><span>HIDESHI</span></h2>
                </Link>

                <div className={`w-full h-screen fixed  right-0 top-0 bg-black/50 ${open ? 'block' : 'hidden'}`}></div>

                {/* desktop  */}
                <ul
                    className={` fixed left-0 top-0 w-11/12 h-screen z-[999] bg-bg_light_primary drop-shadow-2xl flex flex-col
                    p-4
                    ${open ? '' : 'left-[-100%]'}
                    `}
                >
                    <AiOutlineClose 
                        className={`self-end  border-black md:hidden`} 
                        onClick={ () => setOpen(!open)}
                        size={24}
                    />
                    
                    {navLinks.map( ({display, path}, index) => {
                        return(
                            <li key={index} className=' text-sm text-bg_dark_primary mt-3 ml-2 font-extralight font-sans uppercase'>
                                <NavLink to={path}>{display}</NavLink>
                            </li>
                        
                        )
                    })}
                    <div className="flex flex-col items-center justify-center content-end text-center  relative top-[30%] gap-2 w-full">
                        <p className="uppercase font-serif text-lg mb-4 font-semibold">¡¡No te pierdas de nuestras promociones!!</p>
                        <input placeholder="E-MAIL" className=" p-2 border-b border-black w-full text-sm"/>
                        <button className="mt-4 border-2 border-black w-full bg-bg_dark_primary text-bg_light_primary font-serif font-bold text-lg p-[.2em]">Suscribete</button>
                    </div>
        
                </ul>



         

                <div className="flex gap-2 md:gap-4 cursor-pointer items-baseline ">
                    <RiShoppingBagLine size={22}/>
                    <HiOutlineUserCircle size={22} className=' hidden md:block '/> 

                    <span className="self-center md:hidden">
                        <AiOutlineMenu 
                            size={22} 
                            onClick={ () => setOpen(!open)}
                    />
                    </span>  
                </div>
            </nav>
        </header>
    );
};

