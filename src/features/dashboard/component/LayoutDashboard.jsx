import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { useState } from "react"


export const LayoutDashboard = () => {



 

    return (
       <main className="mt-20 flex flex-row">
                <Sidebar/>
                <div className="bg-[#f9fafb] w-full h-screen p-8">
                    <Outlet /> 
                </div>
        </main>
    )
}