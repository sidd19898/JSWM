import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx"
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"



function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
