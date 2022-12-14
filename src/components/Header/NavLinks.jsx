import { NavLink } from "react-router-dom";



export const NavLinks = ({navLinks, desktop, setOpen}) => {
    const onCloseNavBar = () => {
        setOpen(false)
    }
    //TODO make a color when is active the link
    return(
        <>
            {navLinks.map( ({display, path}, index) => {
                    return(
                        <li key={index} className={`text-sm text-text_gray_for_span mt-3 ml-2 font-extralight font-serif uppercase ${desktop ? 'text-base font-semibold' : '' }`}>
                            <NavLink to={path} onClick={onCloseNavBar} className={ (isActive) => `${isActive ? 'text-bg_dark_primary' : 'text-gray-200'}`} >{display}</NavLink>
                        </li>  
                    )
                })
            }
        </>
    )
};