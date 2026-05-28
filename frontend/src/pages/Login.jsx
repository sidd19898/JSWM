import { useState } from "react"
import { login } from "../api/auth.js"
import { Card } from "../components/Card.jsx"
import "../pages/Login.css"
import { useNavigate } from "react-router-dom";

export default function Login(){
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const navigate = useNavigate();

async function handleLogin(){
    const response = await login(email,password)


if(response.status === 200){
      navigate("/dashboard")
}
}

return(
    <div className="Login">
        <Card children1={"Login"}  
        children4={"Email "}
        children5={"Password "}
        children6={"Login"}
        setEmail={setEmail}
        setPassword={setPassword}
        onClick={handleLogin}></Card>
    </div>
)
}