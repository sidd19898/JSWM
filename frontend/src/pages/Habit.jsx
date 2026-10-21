import { Topbar } from "../components/Topbar"
import "../pages/allinone.css"
import { SideBar } from "../components/SideBar"
import { useState } from "react"

export default function Habit(){

    const [show, setShow] = useState(false);
    return(
        
        <div className="space">
        <Topbar setShow={setShow}></Topbar>
        <div className="sep">
        <SideBar show={show}></SideBar>

        </div>
        </div>
    )
}