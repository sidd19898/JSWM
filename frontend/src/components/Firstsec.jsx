import "../components/Firstsec.css"
import "../components/NavLan.css"
import { useNavigate } from "react-router-dom";

export function Firstsec(){
     const navigate = useNavigate();
    return(
<div>
    <div className="ti">Your Ulitimate <br></br>Buddy For Staying <br></br>Consistent</div>
    <div className="ti2"><button className="polo" onClick={() => navigate("/signup")}>Sign up</button>
    <button className="polo">Login</button></div>
</div>
    )
}