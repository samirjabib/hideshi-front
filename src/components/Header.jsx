import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


import { GrFavorite } from 'react-icons/gr';
import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'

import Hamburger from "hamburger-react";


const navLinks = [
    
    { path:'/', display:'Home'},
    { path:'/auth/login',  display:'Login'},
    { path:'/shop', display:'Shop'},
]

export const Header = ({auth}) => {

    console.log(auth)


    const [ open, setOpen ] = useState(false)
    

    const onToggle = (toggle) => {
        if(toggle){
            setOpen(true)
        } else {
            setOpen(false)
        }

    }
   

    return (
        <header className= {`absolute h-20 flex flex-col  justify-center p-4 w-full top-0 z-50  
        ${ open ? 'bg-white'  : 'bg-transparent'}        
        `}>
            <nav className=" w-full flex justify-between h-16 p-2 items-center ">
                <h2 className="md:hidden">
                    <Link className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center" to='/'>HIDESHI</Link>
                </h2>
                <Link className="flex">
                    <img src="" alt="LOGO" className="self-center  border-2 border-black w-16 h-12 flex items-center justify-center"/>
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><Link to='/'>HIDESHI</Link></h2>
                </Link>

                  {/* DESKTOP NAV */}
                <ul className={`
                    flex flex-col items-center w-72 h-screen fixed mt-20 gap-4 p-4 left-0  font-medium text-white top-0 z-40  
                    md:flex md:items-center md:flex-row  md:justify-around md:mt-0  md:w-40 md:h-auto md:static md:shadow-none md:mx-20
                    md:text-[#2b2d42] transition-all duration-500
                    
                    ${
                        open 
                            ? 'left-0 '
                            : 'left-[-40rem] bg-transparent transition-none'
                    }
                    
                
                `}>
                   {
                    navLinks.map( (link, index) => {
                        const { path, display} = link
                        return(
                            <li key={index} className='text-lg mt-12 md:mt-0'>
                                <NavLink className='m-16 relative group' to={path}>
                                      {display}
                                   
                                    <span className={`
                                        absolute -bottom-2 left-1/2 w-0 h-2  bg-[#2b2d42] group-hover:w-1/2 group-hover:transition-all 
                                        ${open ? 'bg-[#ffffff]' : 'bg-[#2b2d42]' }`}>
                                        
                                    </span>
                                    <span className={`
                                        absolute -bottom-2 right-1/2 w-0 h-2 bg-[#2b2d42] group-hover:w-1/2 group-hover:transition-all 
                                        ${open ? 'bg-[#ffffff]' : 'bg-[#2b2d42]' }`}>

                                    </span>
                                </NavLink>
                            </li>
                        )
                    })
                   }
              
                </ul>

                <div className={
                `   
                    md:hidden
                    ${
                        open
                            ? 'fixed  h-screen z-30  top-20 left-0  bg-black w-72 '
                            : 'hidden'
                    }
                `


                
                }></div>
                

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

