import { NavLink } from "react-router-dom";



export const NavLinks = ({navLinks, desktop}) => {

    
    console.log(desktop)

    return(
        <>
              {navLinks.map( ({display, path}, index) => {
                        return(
                            <li key={index} className={`text-sm text-bg_dark_primary mt-3 ml-2 font-extralight font-sans uppercase ${desktop ? 'text-lg font-semibold' : '' }`}>
                                <NavLink to={path}>{display}</NavLink>
                            </li>  
                        )
                    })}
        </>
    )
}