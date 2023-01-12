import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { useState } from "react"


export const LayoutDashboard = () => {



 

    return (
       <main className="mt-20 flex flex-row">
                <Sidebar/>
                <div className="bg-[#f9fafb] w-full h-[130vh] p-8">
                    <Outlet /> 
                </div>
        </main>
    )
}