import { Topbar } from "../components/Topbar"
import "../pages/allinone.css"
import { Operator } from "../components/OperatingBoard"
import { SideBar } from "../components/SideBar"

export default function Dashboard(){
    return(
        <div className="space">
        <Topbar></Topbar>
        <div className="sep">
        <SideBar></SideBar>
        <Operator></Operator>
        </div>
        </div>
    )
}