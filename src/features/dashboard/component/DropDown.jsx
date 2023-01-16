
import { useEffect, useState } from 'react';
import { MdArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'


export const DropDown = ({formCrud, isSelected, setIsSelected, listCategories }) => {
    
    const [ isOpen, setIsOpen ] = useState(false);

    const onHandleOpen = (event) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    };

    useEffect( () => {
        setIsOpen(false)
    }, [isSelected])

    return(
        <div className={`relative ${formCrud ? 'col-span-3' : 'flex flex-col'}`}>
            <button 
                className={` flex flex-row justify-between p-2.5 rounded-md  border ${isOpen ? 'bg-bg_light_primary' : 'bg-[#f4f5f7] '}`}
                onClick={onHandleOpen}                
            >
                <span className={`text-sm ${isSelected !== 'Category' ? 'text-bg_dark_primary' : 'text-text_gray_for_span'}`}>{isSelected}</span>
                {
                    isOpen
                        ? <MdOutlineArrowDropUp className='self-center'/>
                        : <MdArrowDropDown className='self-center'/>
                }
            </button>
            {
                isOpen && (
                    <div className='mt-1 border rounded-md '>
                        {listCategories.map( ({name, id}) => {
                            
                        return(
                            <div 
                                className=' w-full text-sm p-2 bg-[#f4f5f7] text-text_gray_for_span transition-all duration-200 hover:bg-bg_light_primary' 
                                key={id}
                                onClick = {() => setIsSelected(id)}
                            >
                                <h3>{name}</h3>
                            </div>
                        ) 
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}