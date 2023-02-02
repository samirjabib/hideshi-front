



export const Sizes = ({sizes, isSelected, setIsSelected }) => {


    const selected = (display) => {

        if(display === isSelected){
            setIsSelected(null)
        } else {
            setIsSelected(display)
        }
    }


    return(
        <div className="mt-8 flex flex-row w-full } gap-1  text-center uppercase my-4 font-medium max-w-sm ">
            {
                sizes.map( (size) => {
                    return(
                        <div 
                            className={`${(isSelected === size.display) ? " bg-black text-white" : "border-gray-300"} border-[1.3px] transition-all flex items-center justify-center text-xs text-text_gray_for_span py-2 px-2 w-12 cursor-pointer hover:bg-black/3 shadow-sm `}
                            key={size.id}
                            onClick={ () => selected(size.display)}
                        >
                            {size.display}
                        </div>
                    )
                })
            }
        </div>
    )
}