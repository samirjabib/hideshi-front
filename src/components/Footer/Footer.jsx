import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { assets } from "../../assets";

export const Footer = () => {
  return (
    <footer className="w-full bg-bg_light_primary text-bg_dark_primary py-16 relative container text-center mx-auto ">
      <div className="md:px-12 lg:px-28 w-full items-center flex flex-col  ">
        <Link to="/shop">
          <img
            src={assets.logo}
            alt="HIDESHI-LOGO"
            className="flex justify-center w-44 m-auto items-center"
          />
        </Link>
        <div className="m-auto flex w-max items-center justify-between space-x-4 relative bottom-6">
          <Link href="tel:+243996660436" aria-label="call">
            <AiFillInstagram size={26} className="animate-bounce" />
          </Link>
          <Link href="mailto:hello@mail.com" aria-label="send mail"></Link>
          <Link href="#" title="facebook" target="blank" aria-label="facebook">
            <RiWhatsappFill size={26} className="animate-bounce" />
          </Link>
        </div>
        <p className="text-xs w-16 text-gray-700 cursor-pointer">Sobre Nosotros</p>
      </div>
    </footer>
  );
};
