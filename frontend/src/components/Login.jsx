import './Login.css'

export default function Login(){
    return(
        <div className="card">
            <div className='title'><h1>Sign up</h1></div>
            <div className='fname'>Firstname : <input></input></div>
            <div className='lname'>Lastname : <input></input></div>
            <div className='email'>Email :       <input></input></div>
            <div className='password'>Password : <input></input></div>
            <div className='submit'><button className='submit-btn'>Submit</button></div>
        </div>
    )
}