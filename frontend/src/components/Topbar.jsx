import "./allinone.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Button } from "./Button";
import  {Operator}  from "./OperatingBoard";

export function Topbar(){
    return(
        <div>
        <div className="topbar">
        <AccountCircleIcon sx={{color:"white",fontSize:"6vmin"}}></AccountCircleIcon>
        <Button children1={"Task"}></Button>
        </div>
        </div>
    )
}