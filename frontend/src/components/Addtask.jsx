import "../components/allinone.css"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Button3 } from "./Button3";
import { createTasks } from "../api/tasks";

export function Addtask({isActive,setisActive}){
    function godsep(){
    setisActive(true);
    }

const [currentDate, setCurrentDate] = useState(new Date());
const [time, setTime] = useState(null);
const [Title,setTitle] = useState("");
const [From,setFrom] = useState("");
const [To,setTo] = useState("");
const [Dated,setDated] = useState("");

async function createTask() {
  const response = await createTasks(
    Title,
    From,
    To,
    Dated
  )
  
}


    return(
        <div className={`addtask ${!isActive ? "is-visible" : ""}`}>
          <div className="ghsdhj">
            <div className="end">
                <button className="lkjn" onClick={godsep}>
                    <ClearIcon sx={{fontSize:"5vmin"}}>
                    </ClearIcon>
                </button>
            </div>
            <hr></hr>
            <div className="asdfgxcv">Task Detail</div>
            <hr></hr>
            <div className="maind">

            <div className="bshfs">
                <div className="kjdf">Title</div>
                <div>:</div>
                <div><input className="fgk"
                onChange={(e)=>setTitle(e.target.value)}></input></div>
            </div>

            <div className="bshfs">
                <div className="kjdf">From</div>
                <div>:</div>
                <div>

<LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker 
          onChange={(newValue) => {
    setFrom(newValue ? newValue.format("hh:mm A") : "");
  }}
  
         slotProps={{
            textField: {
              fontSize:"5px",
              sx: {
                width: "20vmin",
                 // 130.834 content + 7.38px left/right padding + 1px borders
                '& .MuiPickersInputBase-root': {
                  minHeight: 22.1, // compact field height based on the screenshot box model
                
                },
                '& .MuiPickersSectionList-root': {
                  py: '0px',
                  px: '0px',
                  minHeight: 0,
                  
                },
                '& .MuiPickersInputBase-sectionsContainer': {
                  minWidth: "5vmin",
                  
                },
              },
            },
          }}
        ></TimePicker>
    </LocalizationProvider>

                </div>
            </div>



            <div className="bshfs">
                <div className="kjdf">To</div>
                <div>:</div>
                <div>

 <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker onChange={(newValue) => {
    setTo(newValue ? newValue.format("hh:mm A") : "");
  }}
          slotProps={{
            textField: {
              fontSize:"5px",
              sx: {
                width: "20vmin",
                 // 130.834 content + 7.38px left/right padding + 1px borders
                '& .MuiPickersInputBase-root': {
                  minHeight: 22.1, // compact field height based on the screenshot box model
                
                },
                '& .MuiPickersSectionList-root': {
                  py: '0px',
                  px: '0px',
                  minHeight: 0,
                  
                },
                '& .MuiPickersInputBase-sectionsContainer': {
                  minWidth: "5vmin",
                  
                },
              },
            },
          }}
        />
    </LocalizationProvider>

                </div>
            </div>




            <div className="bshfs">
                <div className="kjdf">Date</div>
                <div>:</div>
                <div><input className="fgk" type="date" value={currentDate.toISOString().split('T')[0]}
                onChange={(e) => setCurrentDate(new Date(e.target.value))}
                onChange={(e)=>setDate(e.target.value)}></input></div>
            </div>

            </div>
            
            <div className="gopds">
                <Button3 children1={"submit"} onclick={createTask}></Button3>
            </div>
</div>
        </div>
    )
}