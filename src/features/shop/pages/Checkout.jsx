import { CartList, InputContainers } from "../components";
import { useShopStore } from "../hooks";
import { assets } from "../../../assets";

export const Checkout = () => {
  const { cartItems, totalPrice, totalQuantity } = useShopStore();

  return (
    <div className=" w-[80%] mx-auto flex  flex-col md:flex-row max-w-4xl justify-between gap-y-2 mt-24 p-4 gap-x-2">
      <div className="">
        <h4 className="uppercase font-semibold text-sm mb-4">ORDER SUMMARY</h4>
        {cartItems.map((cartItem) => {
          return <CartList cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>

      <span className=""></span>
      <div>
        <p></p>
        <span></span>
      </div>

      <form className="flex flex-col">
        <p className="uppercase font-semibold text-sm mb-4">
          Rellena los datos de envio
        </p>
        <InputContainers />
        <div className="w-full flex flex-col">
          <button className="bg-black text-white px-6 py-2 mt-4 cursor-pointer w-full mb-6">
            Pagar
          </button>
          <div className="self-end flex flex-col">
            <h4 className="text-xs font-medium text-gray-700">
              Habilitado para pagar con
            </h4>
            <div className="flex flex-col items-center">
              <img src={assets.mercadoPago} className="object-cover w-14 " />
              <p className="uppercase font-bold text-gray-700 text-xs">
                MercadoPago
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
