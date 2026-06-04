import "./allinone.css"
import MicIcon from '@mui/icons-material/Mic';
import { Button2 } from "./Button2";
import { Reminder } from "./reminder";

export function Operator(){
    return(
        <div className="operator">
            <div className="ld">
                <div className="fdg">
                     <div className="pohf"><MicIcon sx={{color:"white",fontSize:"4vmin"}}></MicIcon></div>
                     <div><Button2 children1={"Add Task"}></Button2></div>
                     <div><Button2 children1={"Delete Task"}></Button2></div>
                 </div>
                 <div>
                     <div><Reminder children1={"Reminders"}></Reminder></div>
                 </div>
            </div>
        </div>
      
    )
}