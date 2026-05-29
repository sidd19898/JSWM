import "../components/allinone.css"
import "../components/NavLan.css"



export function Card({children1,children2,children3,children4,children5,children6,onClick,setFirstName,
  setLastName,
  setEmail,
  setPassword}){
    return(<div>
        <div className="usi">JSWM</div>
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
<div>
{setFirstName && (
    <input 
            type="text"
            placeholder="Firstname"
            onChange={(e)=>setFirstName(e.target.value)}>
    </input>
)}

</div>
<div>
{setLastName && (
    <input   
            type="text"
            placeholder="Lastname"
            onChange={(e)=>setLastName(e.target.value)}>
  </input>
)}

  </div>
<div>
    <input 
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}>
    </input>
</div>
<div>
    <input
           type="password"
           placeholder="Password"
           onChange={(e)=>setPassword(e.target.value)}>
    </input>
</div>
</div>
            </div>
</div>
<div className="kod"><button onClick={onClick}className="pintos">{children6}</button></div>
</div>
</div>
 </div>       
    )
}