import { useEffect,useState,createContext} from "react"
import "../components/allinone.css"
import { deleteTasks } from "../api/tasks";
import { useRemovetask } from "../context/RemovetaskContext";

export function Secondside({children1,children2,children3,children4,children5,children}){
    const [isClicked,setisClicked] = useState(false);
    const { setid } = useRemovetask();
    
    const handleClick = () =>
    {
        setisClicked(!isClicked)
        setid(children5)      
    }

    

    return(
        <button className="hopst" onClick={handleClick}>
        <div className="gidon" style={{backgroundColor:isClicked ? "gray":" #191645",color:"white"}}>
<div className="speciality">{children1}</div>
<div className="special">{children2}</div>
<div className="special">{children3}</div>
<div className="special"><input type="checkbox" className="checker"></input></div>
</div>      
        </button>
    )
}