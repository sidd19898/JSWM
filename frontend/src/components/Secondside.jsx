import { useEffect,useState,createContext} from "react"
import "../components/allinone.css"
import { deleteTasks } from "../api/tasks";
import { useRemovetask } from "../context/RemovetaskContext";
import { editTasks } from "../api/tasks";

export function Secondside({children1,children2,children3,children4,children5,date}){
    const [isClicked,setisClicked] = useState(false);
    const [title, setTitle] = useState(children1);
    const [time, setTime] = useState(children2);
    const [endTime, setEndTime] = useState(children3);
    const { setid } = useRemovetask();
    
    const handleClick = () =>
    {
        setisClicked(!isClicked)
        setid(children5)      
    }

   const handleSave = async (e) => {

        e.stopPropagation();

        const response = await editTasks(
            children5,
            title,
            time,
            endTime,
            date,
            children4,
        );

        setisClicked(false);

        return response;
    };

    return(
        <div className="hopst" onClick={handleClick}>
        <div className="gidon" style={{backgroundColor:isClicked ? "gray":" #191645",color:"white"}}>
{isClicked ? (
<>
                       <input
            className="speciality"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
            className="special"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
            className="special"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />

        <input
            type="checkbox"
            className="checker"
            onClick={(e) => e.stopPropagation()}
        />

        <button onClick={handleSave}>
                            Save
                        </button>
                        </>
):(

<>
                        <div className="speciality">
                            {children1}
                        </div>

                        <div className="special">
                            {children2}
                        </div>

                        <div className="special">
                            {children3}
                        </div>

                        <div className="special">
                            <input
                                type="checkbox"
                                className="checker"
                            />
                        </div>
                    </>

)}
</div>      
        </div>
    )
}