import { NavLink } from "react-router-dom";

export const NavLinks = ({ navLinks, desktop, setOpen }) => {
  const onCloseNavBar = () => {
    setOpen(false);
  };

  return (
    <>
      {navLinks?.map((navLink, index) => {
        const { display, path } = navLink;
        return (
          <li
            key={index}
            className={`text-xs text-text_gray_for_span mt-2 font-extralight font-serif uppercase ${
              desktop ? "text-xs font-serif" : ""
            }`}
          >
            <NavLink
              end
              to={path}
              onClick={onCloseNavBar}
              className={({ isActive }) =>
                isActive ? "text-bg_dark_primary" : "text-text_gray_for_span"
              }
            >
              {display}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
