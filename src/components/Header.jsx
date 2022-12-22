import { useState } from "react";

import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

import { Link } from "react-router-dom";

import { getLinksToNavBar } from "../utils/";
import { useRef } from "react";
import { ListNavMobile } from "./Header/ListNavMobile";
import { ListNavDesktop } from "./Header/ListNavDesktop";





export const Header = ({auth}) => {

    const [ open, setOpen ] = useState(false)
    const [openBag, setBag ] = useState(false)
    const menuRef = useRef()
        
    const navLinks = getLinksToNavBar(auth)
    console.log(navLinks)






    return (
        <header className= {`fixed h-20 flex flex-col  justify-center p-4 w-full top-0 z-50`}>
            <nav className=" w-full flex justify-between h-16 p-2 items-center ">

                <h2 className="md:hidden">
                    <Link className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center" to='/'>HIDESHI</Link>
                </h2>

                <Link to='/' className="flex flex-row"> 
                    <img src="" alt="LOGO" className="self-center  border-2 border-black w-16 h-12 flex items-center justify-center"/>
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><span>HIDESHI</span></h2>
                </Link>

                <div className={`w-full h-screen fixed  right-0 top-0 bg-black/50 ${open ? 'block' : 'hidden'}`}></div>

                <ListNavDesktop navLinks ={navLinks}/>
                {/* mobile  */}
                <ListNavMobile open={open} navLinks={navLinks} setOpen ={ setOpen }/>
        
                <div className="flex gap-2 md:gap-4 cursor-pointer items-baseline ">
                    <RiShoppingBagLine size={22} onClick={ () => setBag(!openBag)}/>
                    <HiOutlineUserCircle size={22} className=' hidden md:block ' /> 

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

