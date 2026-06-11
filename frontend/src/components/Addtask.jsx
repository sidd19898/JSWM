import "../components/allinone.css"
import ClearIcon from '@mui/icons-material/Clear';

export function Addtask({isActive}){
    
    return(
        <div className={`addtask ${!isActive ? "is-visible" : ""}`}>
            <div className="end">
                <button className="lkjn">
                    <ClearIcon sx={{fontSize:"5vmin"}}>
                    </ClearIcon>
                </button>
            </div>
            <div className="asdfgxcv">Task Detail</div>
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
                <div><input className="fgk"></input></div>
            </div>
            <div className="bshfs">
                <div className="kjdf">Date</div>
                <div>:</div>
                <div><input className="fgk"></input></div>
            </div>
        </div>
    )
}