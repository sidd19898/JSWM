import './Landing.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Landing(){
    return(
        <div>
        <Header></Header>
        <Middle></Middle>
        <Faq></Faq>
        </div>
    )
}

function Header(){
  return <div className="header">
    JSWM
  </div>
}

function Middle(){
  const navigate = useNavigate();
  return <div className='middle'>
    
    <div className='h1'>Welcome to JSWM</div>

    <button onClick={() => {
      navigate("/Login");
      document.body.style.backgroundColor = "#191645"
    }}className='login-btn'>Login</button>
    
    <button onClick={() => {
      navigate("/Signup");
    }}className='signup-btn'>Sign Up</button> 
  </div>
}

function Faq(){
  return <div className='faq'>
    <div className='faq-title'>FAQ</div>
    <br></br>
    <div className='que'>1) what does JSWM stands for?
      <div className='ans'>Ans : Just-Stay-With-ME.</div>
    </div>
    <br></br>
    <div className='que'>2) Is it mandatory to sign up and login?
      <div className='ans'>Ans : Yes! It helps to authorize legit users.</div>
    </div>
    <br></br>
    <div className='que'>3) Why is it named JSWM?
      <div className='ans'>Ans : Because It reminds user that the system won't work unless user stays with it till the task is complete and properly updates and creates tasks and other things which are required from user side</div>
    </div>
    <br></br>
    <div className='que'>4) what is the main feature of this website?
      <div className='ans'>Ans : The reminder system for every task which is not completed user can set a reminder for uncoming days so he/She wont make the same mistakes refer doc for more understanding.</div>
    </div>
  </div>
}
