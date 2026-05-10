import "../components/Firstsec.css"
import "../components/NavLan.css"

export function Firstsec({children1,children2,children3,children4,children5}){
    return(
        <div>
        <div className="ti">
            <div className="tino">{children1}</div>
            <div className="tino">{children2}</div>
            <div className="tino">{children3}</div>
            </div>
            <div className="jet"><button className="polo">{children4}</button><button className="polo">{children5}</button></div>
        </div>
    )
}