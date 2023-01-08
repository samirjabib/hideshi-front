import { useEffect, useState } from "react";

import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

import { Link, useNavigate } from "react-router-dom";

import { getLinksToNavBar } from "../../utils";
import { ListNavMobile } from "./ListNavMobile";
import { ListNavDesktop } from "./ListNavDesktop";
import { SideBarBag } from "../SideBarBag";





export const Header = ({auth}) => {

    const [ open, setOpen ] = useState(false)
    const [ openBag, setBag ] = useState(false)
    const [ navLinks, setNavLinks ] = useState([])

    const [ backgroundScroll, setBackgroundScroll ] = useState(true);
    
    const navigate = useNavigate()



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

    


    useEffect( () => {
        window.addEventListener('scroll', backgroundHandle)
    }, [])
    

     useEffect( () => {
        const navLinks = getLinksToNavBar(auth)
        setNavLinks(navLinks) 
    }, [auth])


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
                    alt="logo" 
                    className="self-center border-2 border-black w-16 h-12 mr-6 flex items-center justify-center"
                    />
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><span>HIDESHI</span></h2>
                </Link>
                <div className={`w-full h-screen fixed  right-0 top-0 bg-black/50 ${open || openBag ? 'block' : 'hidden'}`}></div>

                <ListNavDesktop navLinks ={navLinks} setOpen ={ setOpen }/>
                {/* mobile  */}
                <ListNavMobile open={open} navLinks={navLinks} setOpen ={ setOpen } />

                <SideBarBag openBag={openBag} onHandleBag ={ onHandleBag } setBag={ setBag} />


        
                <div className="flex gap-2 md:gap-4 cursor-pointer items-baseline ">
                    <div className="relative" onClick={ onHandleBag }>
                        <RiShoppingBagLine size={22} />
                        <span className="absolute top-[60%] left-[20%] bottom-[50%] py-[10px] rounded-full text-[.6rem] bg-black w-full h-[6px] flex items-center justify-center text-white">4</span>
                    </div>
                    
                    <HiOutlineUserCircle size={22} className=' hidden md:block ' onClick={()=> navigate('/auth/')} />
                    <span className="self-center md:hidden">
                        <AiOutlineMenu size={22}  onClick={ () => setOpen(!open)}/>
                    </span> 

                </div>

            </nav>
        </header>
    );
};

