import "./allinone.css"
import { useNavigate } from "react-router-dom";


export function Button1({children1,to}){
    const navigate = useNavigate();

    const handleclick = () => {
        navigate(to);
    }


    return(
        <div className="poqwed">
            <button className="button1" onClick={handleclick}>{children1}</button>
        </div>
    )
}