import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx"

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
