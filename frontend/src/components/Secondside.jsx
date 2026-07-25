import { useEffect,useState } from "react"
import "../components/allinone.css"
import { deleteTasks } from "../api/tasks";

export function Secondside({children1,children2,children3,children4,children5,deleteclick}){
    const [isClicked,setisClicked] = useState(false);
    const [id,setid] = useState()
    
    const handleClick = () =>
    {
        setisClicked(!isClicked)
        setid(children5)      
    }
 



    useEffect( () => {
        
        const removeTasks = async () => {
        const response = await deleteTasks(
            id
          )
        };
        
        removeTasks();
    },[deleteclick])


    
    
    return(
        <button onClick={handleClick}>
        <div className="gidon" style={{backgroundColor:isClicked ? "gray":" #191645",color:"white"}}>
<div className="speciality">{children1}</div>
<div className="special">{children2}</div>
<div className="special">{children3}</div>
<div className="special"><input type="checkbox" className="checker"></input></div>
</div>      
        </button>
    )
}