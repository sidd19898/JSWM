import "../components/Section.css"
import { Firstsec } from "./Firstsec"
import { Secondsec } from "./Secondsec"
export function Section(){
    return(
<div className="container">        
<div className="section">
<Firstsec></Firstsec>
</div>
<div className="section">
<Secondsec></Secondsec>
</div>
<div className="section">
Hi there
</div>
<div className="section">
Hi there
</div>
</div>
    )
}