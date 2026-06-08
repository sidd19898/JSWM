import "../components/allinone.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Taskview() {
  return (
    <div className="taskview">
      <div className="topside">
          <div className="bin"><DeleteIcon sx={{fontSize:"5vmin"}}></DeleteIcon></div>
          <div>hi there</div>
          <div><ArrowBackIcon sx={{fontSize:"5vmin"}}></ArrowBackIcon>
               <ArrowForwardIcon sx={{fontSize:"5vmin"}}></ArrowForwardIcon></div>
      </div>
      <div className="secondside">

      </div>
    </div>
  )
}
