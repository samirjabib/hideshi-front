import { AiOutlineCloudUpload } from "react-icons/ai"


export const UploadPicture = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4  p-6 grid-rows-4 cursor-pointer">
            <p className="md:col-span-1 relative top-5 md:top-0 text-sm">Product Image</p>
            <div className="border-2 border-dashed md:col-span-3  mx-auto row-span-4 items-center justify-center grid p-8 gap-y-2">
                <AiOutlineCloudUpload 
                    size={32}
                    className='w-full'
                />
                <p className="w-full text-center ">Drag your image here</p>
                <span className="text-text_gray_for_span text-[.7rem] text-center w-full">(only *.jpeg and *.png images will be accepted)</span>
            </div>
        </div>
    )
}