import { SyncLoader } from "react-spinners"

export const Loading = () => {
    return(
        <div className="absolute h-screen w-full flex items-center justify-center">
            <SyncLoader 
                    color="#000000"
            /> 
        </div>
    )
}