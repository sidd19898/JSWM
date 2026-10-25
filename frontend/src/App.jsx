import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx"
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Focus from "./pages/Focus.jsx";
import Habit from "./pages/Habit.jsx";
import Collaboration from "./pages/Collaboration.jsx";
import Education from "./pages/Education.jsx";
import Taskview from "./pages/Taskview.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";


function App() {
  
  return (
    <div>
      <SidebarProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/focus" element={<Focus/>}/>
            <Route path="/habit" element={<Habit/>}/>
            <Route path="/collaboration" element={<Collaboration/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/taskview" element={<Taskview/>}/>
          </Routes>
        </BrowserRouter>
        </SidebarProvider>
    </div>
  )
}

export default App
