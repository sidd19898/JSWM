import "./allinone.css"
import { Button1 } from "./Button1"

export function SideBar(){
    return(
        <div className="SideBar">
            <Button1 children1={"Task Panel"}></Button1>
            <Button1 children1={"Focus & Timing"}></Button1>
            <Button1 children1={"Habit Tracker"}></Button1>
            <Button1 children1={"Collaboration"}></Button1>
            <Button1 children1={"Education"}></Button1>
            <Button1 children1={"Task View"}></Button1>
        </div>
    )
}