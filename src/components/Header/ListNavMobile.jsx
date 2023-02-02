import { useEffect } from "react"
import { useRef } from "react"
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai"
import { ToastContainer } from "react-toastify"
import { useAuthStore } from "../../features"
import { GetEmail } from "./GetEmail"
import { NavLinks } from "./NavLinks"

export const ListNavMobile = ({open, navLinks, setOpen, status}) => {
    console.log(status)
    

    const { startLogout } = useAuthStore()

    const onCloseNavBar = () => {
        console.log(open)
        setOpen(false)
    }

    const logout = () => {
        console.log('hice click')
        startLogout()
    }

    const menuMobileRef = useRef();
    

    useEffect( () => {
        document.addEventListener( "click" , handleOutSideClick, true )

        return document.removeEventListener("click", handleOutSideClick, false)
    },[])

    const handleOutSideClick = ( { target }) => {
        if(!menuMobileRef.current?.contains( target )){
            setOpen(false)
        }
    }

  
    


    return(
        <ul
            className={` fixed left-0 top-0 w-11/12 h-screen z-[999] bg-bg_light_primary drop-shadow-2xl flex flex-col
            p-4 transition-all duration-300
            ${open ? 'max-w-md' : 'left-[-100%]'}
            `}
            ref={menuMobileRef}
        >
            <AiOutlineClose 
                className={`self-end cursor-pointer border-black md:hidden`} 
                onClick={ onCloseNavBar}
                size={24}
            />
            <span className="border border-black/30 mt-2"></span>
            <NavLinks navLinks={navLinks} setOpen={setOpen}/>
            {
                (status ==='authenticated') &&
                    <span className="mt-8 ml-1 flex flex-row border border-text_gray_for_span w-36 py-2 items-center justify-center rounded-sm shadow transition-all hover:bg-black text-text_gray_for_span  hover:text-white cursor-pointer">
                        <AiOutlineLogout
                        color="#8b8b8b"
                        className="text-red-500 mr-1"
                        size={22}
                        onClick={logout}
                        />
                        <p className="text-xs self-center font-extralight font-serif uppercase">Desconectate</p>

                    </span> 
            }
          
            <GetEmail/>
            <ToastContainer/>
        </ul>

    )
}