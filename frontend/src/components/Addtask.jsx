import "../components/allinone.css"

export function Addtask({isActive}){
    
    return(
        <div className={`addtask ${!isActive ? "is-visible" : ""}`}>
            hithere
        </div>
    )
}