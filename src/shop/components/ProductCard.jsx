


const ProductCard = () => {


    
    return (
        <div className='border-2 border-black h-72 lg:h-96 flex flex-col '>
            <img 
                src="" 
                alt="image"
                className=" w-full h-[80%] flex items-center justify-center border-2 border-black p-2"
            />
            <div className=" w-full h-[20%] flex-col text-center justify-between p-2 items-center border-2 border-black">
                <h2>Title</h2>
                <span>Price</span>
            </div>
            

        </div>
    );
};

export default ProductCard;