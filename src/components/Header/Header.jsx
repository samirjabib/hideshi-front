import { useEffect, useState } from "react";

import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine, RiWindowsFill} from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

import { Link } from "react-router-dom";

import { getLinksToNavBar } from "../../utils";
import { ListNavMobile } from "./ListNavMobile";
import { ListNavDesktop } from "./ListNavDesktop";
import { SideBarBag } from "../SideBarBag";





export const Header = ({auth}) => {

    const [ open, setOpen ] = useState(false)
    const [ openBag, setBag ] = useState(false)

    const [ backgroundScroll, setBackgroundScroll ] = useState(true);


    const backgroundHandle = () => {
        if(window.scrollY >= 100){
            setBackgroundScroll(false);
        } else {
            setBackgroundScroll(true);
        }
    }

    const onHandleBag = () => {
        setBag(!openBag)
    }

    
    const handleOutSideClick = ( { target }) => {
        if(!menuMobileRef.current.contains( target )){
            setOpen(false)
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', backgroundHandle)
    }, [])
   
    const navLinks = getLinksToNavBar(auth)

    return (
        <header 
            className= {`fixed h-20 flex flex-col  justify-center p-4 w-full top-0 z-[50]  ${ backgroundScroll ? 'bg-transparent' : 'bg-bg_light_primary' }`}
            onChange={ backgroundHandle }
        >
            <nav className=" w-full flex justify-between h-16 p-2 items-center ">

                <h2 className="md:hidden">
                    <Link className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center" to='/'>HIDESHI</Link>
                </h2>

                <Link to='/' className="flex flex-row"> 
                    <img 
                    src=""
                    alt="LOGO" 
                    className="self-center  border-2 border-black w-16 h-12 flex items-center justify-center"
                    data-aos='fade-right'
                    />
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><span>HIDESHI</span></h2>
                </Link>
                <div className={`w-full h-screen fixed  right-0 top-0 bg-black/50 ${open || openBag ? 'block' : 'hidden'}`}></div>

                <ListNavDesktop navLinks ={navLinks} setOpen ={ setOpen }/>
                {/* mobile  */}
                <ListNavMobile open={open} navLinks={navLinks} setOpen ={ setOpen } />

                <SideBarBag openBag={openBag} onHandleBag ={ onHandleBag } />


        
                <div className="flex gap-2 md:gap-4 cursor-pointer items-baseline ">
                    <RiShoppingBagLine size={22} onClick={ onHandleBag }/>
                    
                    <HiOutlineUserCircle size={22} className=' hidden md:block ' />
                    <span className="self-center md:hidden">
                        <AiOutlineMenu size={22}  onClick={ () => setOpen(!open)}/>
                    </span> 

                </div>

            </nav>
        </header>
    );
};

