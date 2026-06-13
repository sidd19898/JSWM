import "../components/allinone.css"
import ClearIcon from '@mui/icons-material/Clear';
import { Button3 } from "./Button3";
import { useState } from "react";
import TimePicker from 'react-time-picker';

export function Addtask({isActive,setisActive}){
    function godsep(){
    setisActive(true);
    }

const [currentDate, setCurrentDate] = useState(new Date());
const [value, onChange] = useState('10:00');

    return(
        <div className={`addtask ${!isActive ? "is-visible" : ""}`}>
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
                <div><input className="fgk"></input></div>
            </div>
            <div className="bshfs">
                <div className="kjdf">From</div>
                <div>:</div>
                <div><input className="fgk"></input></div>
            </div>
            <div className="bshfs">
                <div className="kjdf">To</div>
                <div>:</div>
                <div><TimePicker onChange={onChange} value={value} /></div>
            </div>
            <div className="bshfs">
                <div className="kjdf">Date</div>
                <div>:</div>
                <div><input className="fgk" type="date" value={currentDate.toISOString().split('T')[0]}
                onChange={(e) => setCurrentDate(new Date(e.target.value))}></input></div>
            </div>

            </div>
            
            <div className="gopds">
                <Button3 children1={"submit"}></Button3>
            </div>
        </div>
    )
}