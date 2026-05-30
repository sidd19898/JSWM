import "./allinone.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Button } from "./Button";
import  {Operator}  from "./OperatingBoard";

export function Topbar(){
    return(
        <div>
        <div className="topbar">
        <AccountCircleIcon sx={{color:"white",fontSize:"2.5rem"}}></AccountCircleIcon>
        <Button children1={"Task"}></Button>
        </div>
        <div>
        <Operator></Operator>
        </div>
        </div>
    )
}