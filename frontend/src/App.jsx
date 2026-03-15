import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'

function App() {
  return (
        <div>  
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
