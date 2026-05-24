import "../components/allinone.css"
import "../components/NavLan.css"



export function Card({children1,children2,children3,children4,children5,children6}){
    return(
        <div className="card">
            <div className="realcard">
            <div className="cent">{children1}</div>
            
            <div className="gops">

            <div className="start">
<div>{children2}</div>
<div>{children3}</div>
<div>{children4}</div>
<div>{children5}</div>
            </div>

            <div className="end">
                <div className="psd">
<div className="sopari">:</div>
<div className="sopari">:</div>
<div className="sopari">:</div>
<div className="sopari">:</div>
</div>
<div className="lods">
<div><input></input></div>
<div><input></input></div>
<div><input></input></div>
<div><input></input></div>
</div>
            </div>
</div>
<div className="kod"><button className="pintos">{children6}</button></div>
</div>

        </div>
        
    )
}