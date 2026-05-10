import "../pages/landing.css"
import {Nav} from "../components/NavLan.jsx"
import { Firstsec } from "../components/Firstsec.jsx"

export default function landing(){
    return(
        <div className="body">
            <Nav children1={"JSWM"} children2={"Features"} children3={"How it works"} children4={"About"} children5={"Docs"}></Nav>
            <Firstsec children1={"Your Ulitimate"}
                      children2={"Buddy For Staying"}
                      children3={"Consistent"}
                      children4={"sign up"}
                      children5={"Login"}
                      ></Firstsec>
        </div>
    )
}