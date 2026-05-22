import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx"
import Signup from "./pages/Signup.jsx";

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
