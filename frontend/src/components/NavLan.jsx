import "../components/NavLan.css"
import { useState,useEffect }  from 'react';
import { Menu } from "./Menu.jsx";

export function Nav({children1,children2,children3,children4,children5}){
    const [modal,setModal] = useState(false)
    return(
        <div className="Nav">
            <div className="title">{children1}</div>
            <div className="feat">
            <div><button className="bu">{children2}</button></div>
            <div><button className="bu">{children3}</button></div>
            <div><button className="bu">{children4}</button></div>
            <div><button className="bu">{children5}</button></div>
            </div>
            <div className="hamburgur">
            <button className="bui" onClick={()=>setModal(!modal)}>
{modal ? (
<div>
<svg width="5.4vmax" height="2.2vmax" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white"/>
</svg>
<Menu></Menu>
</div>
):(

<svg width="5vmax" height="2vmax" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="38" width="35" height="5" fill="white"/>
<rect x="10" y="25" width="35" height="5" fill="white"/>
<rect x="10" y="12.4" width="35" height="5" fill="white"/>
</svg>

)
}
</button>

            </div>
        </div>

    )
}