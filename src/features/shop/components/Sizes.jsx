import { useState } from "react";

const sizes = [
    {
        id:0,
        display:'xs',
    },
    {
        id:1,
        display:'s',
    },
    {
        id:2,
        display:'l',
    },
    {
        id:3,
        display:'xl',
    },
    {
        id:4,
        display:'xxl',
    },
]


export const Sizes = () => {


    const [ isSelected, setIsSelected ] = useState(null);


    return(
        <div className="mt-8 flex flex-row w-full } justify-between text-center uppercase my-4 font-medium md:gap-2 max-w-sm ">
            {
                sizes.map( (size) => {
                    return(
                        <div 
                            className={`${(isSelected === size.display) ? "border-black" : "border-gray-300"} border-[1.3px]  text-xs py-4 px-4 w-12 cursor-pointer `}
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