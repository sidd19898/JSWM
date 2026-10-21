import "./allinone.css"
import { Button1 } from "./Button1"

export function SideBar({ show }){
    return(
        <div className={`SideBar ${show ? "show" : "hide"}`}>
            <Button1 children1={"Task Panel"} to={"/dashboard"}></Button1>
            <br></br>
            <Button1 children1={"Focus & Timing"} to={"/focus"}></Button1>
            <br></br>
            <Button1 children1={"Habit Tracker"} to={"/habit"}></Button1>
            <br></br>
            <Button1 children1={"Collaboration"} to={"/collaboration"}></Button1>
            <br></br>
            <Button1 children1={"Education"} to={"/education"}></Button1>
            <br></br>
            <Button1 children1={"Task View" } to={"/taskview"}></Button1>
        </div>
    )
}