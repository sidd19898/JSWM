import "../components/allinone.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Secondside } from "./Secondside";
import { useState } from "react";

export function Taskview() {

  const [currentDate, setcurrentDate] = useState(new Date());

  const changeDate = (daysAmount) => {
    setcurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate()+ daysAmount);
      return newDate;
    })
  }
  return (
    <div className="taskview">
      <div className="topside">
          <div className="bin"><DeleteIcon sx={{fontSize:"5vmin"}}></DeleteIcon></div>
          <div className="today">
            <input
  type="date"
  value={currentDate.toISOString().split("T")[0]}
  min={currentDate.toISOString().split("T")[0]}
  max="2026-12-31"
  className="cal"
/>
          </div>
          <div>
            <button onClick={() => changeDate(-1)}><ArrowBackIcon sx={{fontSize:"5vmin"}}></ArrowBackIcon></button>
            <button onClick={() => changeDate(1)}><ArrowForwardIcon sx={{fontSize:"5vmin"}}></ArrowForwardIcon></button>
          </div>
      </div>
      <div>
        <Secondside children1={"hi"} children2={"hi"} children3={"hi"}></Secondside>
      </div>
    </div>
  )
}
