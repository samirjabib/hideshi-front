



export const Sizes = ({sizes, isSelected, setIsSelected }) => {



    return(
        <div className="mt-8 flex flex-row w-full } justify-between text-center uppercase my-4 font-medium md:gap-2 max-w-sm ">
            {
                sizes.map( (size) => {
                    return(
                        <div 
                            className={`${(isSelected === size.display) ? "border-black bg-black/4" : "border-gray-300"} border-[1.3px]  text-xs py-4 px-4 w-12 cursor-pointer hover:bg-black/3 `}
                            key={size.id}
                            onClick={ () => setIsSelected(size.display)}
                        >
                            {size.display}
                        </div>
                    )
                })
            }
        </div>
    )
}