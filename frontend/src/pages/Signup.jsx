import { Card } from "../components/Card.jsx"
import "../pages/Signup.css"

export default function Signup(){
return(
    <div>
        <Card children1={"Signup"}  
        children2={"Firstname : "}
        children3={"Lastname  : "}
        children4={"Email     : "}
        children5={"Password  : "}
        children6={"Signup "}></Card>
    </div>
)
}