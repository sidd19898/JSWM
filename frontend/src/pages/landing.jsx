import "../pages/landing.css"
import {Nav} from "../components/NavLan.jsx"

export default function landing(){
    return(
        <div className="body">
            <Nav children1={"JSWM"} children2={"Features"} children3={"How it works"} children4={"About"} children5={"Docs"}></Nav>
        </div>
    )
}