import { NavLink } from "react-router-dom";



export const NavLinks = ({navLinks, desktop, setOpen}) => {

    
    const onCloseNavBar = () => {
        console.log(open)
        setOpen(false)
    }


    

    return(
        <>
              {navLinks.map( ({display, path}, index) => {
                        return(
                            <li key={index} className={`text-sm text-bg_dark_primary mt-3 ml-2 font-extralight font-sans uppercase ${desktop ? 'text-lg font-semibold' : '' }`}>
                                <NavLink isActive={ (event) => console.log(event)} to={path} onClick={onCloseNavBar}>{display}</NavLink>
                            </li>  
                        )
                    })}
        </>
    )
}