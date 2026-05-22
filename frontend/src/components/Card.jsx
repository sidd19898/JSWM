import "../components/allinone.css"
import "../components/NavLan.css"

export function Card({children1,children2,children3,children4,children5,children6}){
    return(
        <div className="card">
            <div className="lopo">
        <div className="ponf">
        <div className="pffj">{children1}</div>
        
        <div>{children2}<input></input></div>
        <div>{children3}<input></input></div>
        <div>{children4}<input></input></div>
        <div>{children5}<input></input></div>
        </div>
        <div><button className="polo"> {children6} </button></div>
        </div>
        
        </div>
    )
}