import "../components/allinone.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Secondside } from "./Secondside";
import { useState,useEffect } from "react";
import { getTasks } from "../api/tasks";

export function Taskview() {

  const [currentDate, setcurrentDate] = useState(new Date());
  const [Tasks,setTasks] = useState([]);

  const changeDate = (daysAmount) => {
    setcurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate()+ daysAmount);
      return newDate;
    })
  }

    useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response);
    };

    fetchTasks();
  }, []); // Runs only on initial render

console.log(Tasks);
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
      <div className="shds">
       {Tasks.map(task => (
    <Secondside
        children1={task.Title}
        children2={task.From}
        children3={task.To}
        children4={task.Status}
    />
))}
      </div>
    </div>
  )
}
