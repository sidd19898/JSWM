import "../components/Section.css"
import { Firstsec } from "./Firstsec"
import { Fourthsec } from "./Fourthsec"
import { Secondsec } from "./Secondsec"
import { Thirdsec } from "./Thirdsec"
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
<Thirdsec></Thirdsec>
</div>
<div className="section">
<Fourthsec></Fourthsec>
</div>
</div>
    )
}