import { Topbar } from "../components/Topbar"
import "../pages/allinone.css"
import { SideBar } from "../components/SideBar"
import { useState } from "react"
import { useSidebar } from "../context/SidebarContext"

export default function Taskview(){

    const { show, setShow } = useSidebar(); 
    return(
        
        <div className="space">
        <Topbar setShow={setShow}></Topbar>
        <div className="sep">
        <SideBar show={show}></SideBar>

        </div>
        </div>
    )
}