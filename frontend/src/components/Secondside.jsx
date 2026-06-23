import { useState } from "react"
import "../components/allinone.css"

export function Secondside({children1,children2,children3,children4}){
    const [isClicked,setisClicked] = useState(false);

    const handleClick = () =>
    {
        setisClicked(!isClicked)
    }
    
    return(
        <button onClick={handleClick}>
        <div className="gidon" style={{backgroundColor:isClicked ? "gray":" #191645",color:"white"}}>
<div className="speciality">{children1}</div>
<div className="special">{children2}</div>
<div className="special">{children3}</div>
<div className="special"><input type="checkbox" checked={children4} className="checker"></input></div>
        </div>
        </button>
    )
}