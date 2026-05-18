import "../components/Menu.css"
import "../components/NavLan.css"

export function Menu(){
    return(
<div className="pottry">
        <div className="lop"><button className="bu">Features</button></div>
        <div className="lop"><button className="bu">How it Works</button></div>
        <div className="lop"><button className="bu">About</button></div>
        <div className="lop"><button className="bu">Docs</button></div>
    </div>
    )
}