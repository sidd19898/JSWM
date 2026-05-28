import { Card } from "../components/Card.jsx"
import { useState } from "react";
import { signup } from "../api/auth.js";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Signup(){
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup (){
const response = await signup(
      firstName,
      lastName,
      email,
      password
   )

      if(response.status === 200){
      navigate("/login")
   }
  }

return(
    <div>
        <Card children1={"Sign up"}  
        children2={"Firstname "}
        children3={"Lastname "}
        children4={"Email "}
        children5={"Password "}
        children6={"Sign up "}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        onClick={handleSignup}>

        </Card>
    </div>
)
}