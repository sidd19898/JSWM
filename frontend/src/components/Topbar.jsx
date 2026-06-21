import "./allinone.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Button } from "./Button";
import  {Operator}  from "./OperatingBoard";
import MenuIcon from '@mui/icons-material/Menu';
import { SideBar } from "./SideBar";
import { useState } from "react";

export function Topbar({ setShow }){

    return(
        <div>
        <div className="topbar">
            <div>
        <AccountCircleIcon sx={{color:"white",fontSize:"6vmin"}}></AccountCircleIcon>
        </div>
        <div style={{display:"flex",gap:"5vmin"}}>
        <Button children1={"Task"}></Button>
        
        <button className={"hamburger"} onClick={() => setShow(prev => !prev)}>
        <MenuIcon sx={
            {
                color:"white",
                fontSize:"5vmin"
            }
        }></MenuIcon></button>


        
        </div>
        </div>
        </div>
    )
}