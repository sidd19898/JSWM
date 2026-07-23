import { useState } from "react"
import "../components/allinone.css"
import { deleteTasks } from "../api/tasks";

export function Secondside({children1,children2,children3,children4,children5,Key}){
    const [isClicked,setisClicked] = useState(false);

    const handleClick = async () =>
    {
        setisClicked(!isClicked)

        const response = await deleteTasks(
            children5
          )

    }
    
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