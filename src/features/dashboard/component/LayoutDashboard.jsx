import { Outlet } from "react-router-dom"


export const LayoutDashboard = () => {

    return (
       <div className="mt-20 flex flex-row">
                {/* <Sidebar/> */}
                <div className="bg-[#f9fafb] w-full h-[130vh] p-8">
                    <Outlet /> 
                </div>
        </div>
    )
}