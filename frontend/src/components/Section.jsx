import "../components/Section.css"
import { Firstsec } from "./Firstsec"
import { Fourthsec } from "./Fourthsec"
import { Secondsec } from "./Secondsec"
import { Thirdsec } from "./Thirdsec"


export function Section(){
    return(
<div className="container">        
<div id="jswm" className="section">
<Firstsec></Firstsec>
</div>
<div id="features" className="section">
<Secondsec></Secondsec>
</div>
<div id="howitworks" className="section">
<Thirdsec></Thirdsec>
</div>
<div id="about" className="section">
<Fourthsec></Fourthsec>
</div>
</div>
    )
}