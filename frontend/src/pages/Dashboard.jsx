import { Topbar } from "../components/Topbar"
import "../pages/allinone.css"
import { Operator } from "../components/OperatingBoard"
import { SideBar } from "../components/SideBar"
import { useState } from "react"

export default function Dashboard(){

    const [show, setShow] = useState(false);
    return(
        
        <div className="space">
        <Topbar setShow={setShow}></Topbar>
        <div className="sep">
        <SideBar show={show}></SideBar>
        <Operator></Operator>
        </div>
        </div>
    )
}