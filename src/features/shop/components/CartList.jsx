export const CartList = ({ cartItem }) => {
  const { id, name, img, price, quantity, size, total } = cartItem;
  console.log(cartItem);

  return (
    <div className="flex flex-row gap-x-4">
      <img src={img} alt={name} className='w-24'/>
      <div>
        <p className="font-semibold uppercase text-sm">{name}</p>
        <p className="text-gray-700  font-extralight text-xs">Size:<span className="uppercase text-xs">{size}</span></p>
        <p className="font-normal text-xs">Quantity:<span className="font-semibold">{quantity}</span></p>
        <p className="text-xs text-gray-700 font-bold">Total:<span className=" font-normal text-black">COP {total}</span></p>
      </div>
    </div>
  );
};
