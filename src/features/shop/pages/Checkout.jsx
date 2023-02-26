import { CartList, InputContainers } from "../components";
import { useShopStore } from "../hooks";

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
        <button className="bg-black text-white px-6 py-2 mt-4 cursor-pointer">
          Pagar
        </button>
      </form>
    </div>
  );
};
