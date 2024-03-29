import { HiOutlineUserCircle } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { ListNavMobile } from "./ListNavMobile";
import { ListNavDesktop } from "./ListNavDesktop";
import { SideBarBag } from "../SideBarBag";
import { useBackgroundScroll, useNavLinks, useOpen } from "../../hooks";

import {
  AddProductModal,
  useAuthStore,
  useProductsStore,
  useShopStore,
} from "../../features";
import { assets } from "../../assets";

export const Header = ({ auth }) => {
  const { open, setOpen } = useOpen();
  const { startLogout } = useAuthStore();
  const { backgroundHandle, backgroundScroll } = useBackgroundScroll();
  const { isCartOpen, onSetCartOpen, totalQuantity } = useShopStore();
  const { navLinks } = useNavLinks(auth);
  const { setProductModal, isOpenProduct } = useProductsStore();

  const navigate = useNavigate();

  const onHandleDashboardAndLogin = () => {
    if (auth.status === "authenticated") {
      navigate("/dashboard/state-products");
    } else {
      navigate("/auth/login");
    }
  };

  const body = document.getElementsByTagName("body")[0];

  if (open || isCartOpen || isOpenProduct) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  return (
    <header
      className={`fixed h-20 flex flex-col  justify-center p-4 w-full top-0 z-[50] ${
        backgroundScroll ? "bg-transparent" : "bg-bg_light_primary"
      }`}
      onChange={backgroundHandle}
    >
      <nav className=" w-full flex justify-between h-16 p-2 items-center ">
        <h2 className="md:hidden">
          <Link
            className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center"
            to="/"
          >
            HIDESHI
          </Link>
        </h2>

        <Link to="/" className="flex flex-row">
          <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center">
            <span>HIDESHI</span>
          </h2>
        </Link>
        <div
          className={`w-full h-screen fixed scroll- z-50 right-0 top-0 bg-black/70 ${
            open || isCartOpen || isOpenProduct ? "block" : "hidden"
          }`}
        ></div>

        <SideBarBag openBag={isCartOpen} setBag={onSetCartOpen} />

        <AddProductModal
          setProductModal={setProductModal}
          isOpenProduct={isOpenProduct}
        />

        <div className="flex gap-2 md:gap-4 cursor-pointer items-center ">
          <ListNavDesktop navLinks={navLinks} setOpen={setOpen} />
          <ListNavMobile
            open={open}
            navLinks={navLinks}
            setOpen={setOpen}
            startLogout={startLogout}
            status={auth.status}
          />
          <div className="relative" onClick={() => onSetCartOpen(!isCartOpen)}>
            <RiShoppingBagLine size={22} />
            <span className="absolute top-[60%] left-[20%] bottom-[50%] py-[10px] rounded-full text-[.6rem] bg-black w-full h-[6px] flex items-center justify-center text-white">
              {totalQuantity}
            </span>
          </div>

          <HiOutlineUserCircle
            size={22}
            className=" hidden md:block"
            onClick={onHandleDashboardAndLogin}
          />

          {auth.status === "authenticated" && (
            <span className="self-center hidden md:block">
              <AiOutlineLogout size={22} onClick={startLogout} />
            </span>
          )}

          <span className="self-center md:hidden">
            <AiOutlineMenu size={22} onClick={() => setOpen(!open)} />
          </span>
        </div>
      </nav>
    </header>
  );
};
