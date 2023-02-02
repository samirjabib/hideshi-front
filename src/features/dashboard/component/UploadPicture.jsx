import { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai"


export const UploadPicture = ({ onFileInputChange, filesImg }) => {
    const fileInputRef = useRef();

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 p-6  ">
                <p className=" col-span-4 md:col-span-1 mb-4 md:mb-0 md:top-0 text-base ">Product Image</p>
                <div className="w-full   col-span-3">
                <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    className="hidden"
                    multiple
                />
                <div 
                    className="border-2 border-dashed md:col-span-3 mx-auto grid-span-4 items-center justify-center grid p-8 gap-y-2 cursor-pointer "
                    onClick={ () => fileInputRef.current.click()}
                >
                    <AiOutlineCloudUpload 
                        size={32}
                        className='w-full'
                    />
                    <p className="w-full text-center ">Drag your image here</p>
                    <span className="text-text_gray_for_span text-[.7rem] text-center w-full">
                        (only *.jpeg and *.png images will be accepted)
                    </span>
                </div>
                <div className="col-start-2 col-end-5  mt-4  font-bold text-text_gray_for_span">
                        <h4 className={`${!!filesImg ? '' : 'hidden'} text-sm`}>Img Uploading</h4>
                    {
                        !!filesImg && filesImg.map( (file, index) => {
                            return(
                                <li 
                                key={index}
                                className='text-xs text-text_gray_for_span relative left-4'
                                >
                                    {file.name}
                                </li>
                            )
                        })
                    }
                </div> 
                </div>
      
            </div>

   
        </>
    )
}