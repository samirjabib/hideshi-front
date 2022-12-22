import { useState } from "react";

import Hamburger from "hamburger-react";
import { GrFavorite } from 'react-icons/gr';
import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { getLinksToNavBar } from "../utils/";





export const Header = ({auth}) => {

    const [ open, setOpen ] = useState(false)
        
    const navLinks = getLinksToNavBar(auth)
    console.log(navLinks)





    

    const onToggle = (toggle) => {
        if(toggle){
            setOpen(true)
        } else {
            setOpen(false)
        }

    }
   
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

                <div className={`w-full h-screen absolute top-0 bg-black/50`}></div>

                {/* desktop  */}
                <ul
                    className={`border-2 border-black fixed left-0 top-0 w-3/4 h-screen z-[999] bg_light_primary`}
                >
                    {navLinks.map( ({display, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path}>{display}</NavLink>
                            </li>
                        )
                    })}
                </ul>



         

                <div className="flex md:gap-4 cursor-pointer">
                    <GrFavorite size={22} className='self-center hidden md:block'/>
                    <RiShoppingBagLine size={22} className='self-center '/>
                    <HiOutlineUserCircle size={25} className='self-center hidden md:block '/> 

                    <span className="self-center md:hidden">
                        <Hamburger 
                            direction="left" 
                            size={20} duration={0.8}
                            className="self-center"
                            onToggle={onToggle}
                    />
                    </span>  
                </div>
            </nav>
        </header>
    );
};

