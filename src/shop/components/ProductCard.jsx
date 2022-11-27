
const ProductCard = () => {
    return (
        <div className='border-2 border-black h-52 p-2'>
            <img 
                src="" 
                alt="image"
                className="border-2 border-black w-full h-[80%]"
            />
            <div className="border-2 border-black w-full h-auto flex justify-between">
                <h2>Title</h2>
                <span>Price</span>
            </div>
            

        </div>
    );
};

export default ProductCard;