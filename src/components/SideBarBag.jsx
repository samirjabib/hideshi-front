import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useShopStore } from "../features";
import { CartShop } from "./CartShop";

export const SideBarBag = ({ openBag, setBag }) => {
  const navigate = useNavigate();

  const { totalPrice, totalInCart, cartItems } = useShopStore();

  const checkoutHandle = () => {
    navigate("shop/checkout");
  };

  const sideBarRef = useRef();

  useEffect(() => {
    totalInCart();
  }, [cartItems]);

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick, true);

    return document.removeEventListener("click", handleOutSideClick);
  }, []);

  const handleOutSideClick = ({ target }) => {
    if (!sideBarRef.current?.contains(target)) {
      setBag(false);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 w-9/12  md:max-w-[22rem] h-screen overflow-scroll bg-bg_light_primary shadow-2xl  z-[999] 
            transition-all duration-300 flex-col flex p-4
            ${openBag ? "left-0" : "left-[-100%]"} `}
      ref={sideBarRef}
    >
      <div className=" fixed justify-between mb-2 bg-bg_light_primary top-0 h-12 py-4 z-[999] mt-4 ">
        <h6 className=" text-sm font-semibold flex flex-row self-end">
          BOLSA DE COMPRAS
        </h6>
      </div>
      <AiOutlineClose
        className={` absolute right-0 font-bold cursor-pointer mt-[1rem] mr-4`}
        onClick={() => setBag(false)}
        size={22}
      />
      <span className="border bg-text_gray_for_span mt-14 w-full "></span>
      <CartShop />
      <p className="text-sm md:text-base font-sans font-medium mt-4">
        SUBTOTAL: $<span className="font-semibold">{totalPrice}</span>
      </p>
      <button
        className="border-2 border-black mt-12 text-bg_light_primary bg-bg_dark_primary text-sm font-bold py-2"
        onClick={checkoutHandle}
      >
        CHECKOUT
      </button>

      <span className="border bg-text_gray_for_span mt-10 w-full"></span>

      <p className="mt-8 text-xs font-medium uppercase font-700">
        ¡¡Opten un 20% de Descuento en tu siguiente compra!!
      </p>
      <input
        className="w-full border-b p-2  text-sm outline-none border-black mt-2 "
        placeholder="E-mail"
      />
      <button className="border border-black mt-4  bg-text_dark_primary text-sm font-bold py-2 uppercase font-400 shadow transition-all duration-300 hover:bg-black hover:text-white">
        Suscribete
      </button>
    </div>
  );
};
