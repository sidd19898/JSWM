import { useEffect,useState,createContext} from "react"
import "../components/allinone.css"
import { useRemovetask } from "../context/RemovetaskContext";
import { editTasks } from "../api/tasks";
import { useTask } from "../context/TaskContext";
import { getTasks } from "../api/tasks";

export function Secondside({children1,children2,children3,children4,children5,date}){
    const [isClicked,setisClicked] = useState(false);
    const [title, setTitle] = useState(children1);
    const [time, setTime] = useState(children2);
    const [endTime, setEndTime] = useState(children3);
    const [status, setStatus] = useState(children4);
    const { setid } = useRemovetask();
    const { setTasks } = useTask();
    
    const handleClick = () =>
    {
        setisClicked(!isClicked)
        setid(children5)      
    }

   const handleSave = async (e, newStatus = status) => {
    if (e) {
        e.stopPropagation();
    }

    const response = await editTasks(
        children5,
        title,
        time,
        endTime,
        date,
        newStatus,
    );

    setisClicked(false);

    await fetchTasks();

    return response;
};


    const fetchTasks = async () => {
          const response = await getTasks(date);
          setTasks(response);
        };

    return(
        <div className="hopst" onClick={handleClick}>
        <div className="gidon" style={{backgroundColor:isClicked ? "gray":" #191645",color:"white"}}>

                       <input
            className="need"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
            className="need"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
            className="need"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
    type="checkbox"
    className="checker"
    checked={status}
    onChange={(e) => {
        e.stopPropagation();
        const newStatus = e.target.checked;
        setStatus(newStatus);
        handleSave(e, newStatus);
    }}
/>

        <button onClick={handleSave}>
                            Save
                        </button>
                        
</div>      
        </div>
    )
}