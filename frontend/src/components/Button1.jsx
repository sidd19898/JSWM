import "./allinone.css";
import { useNavigate, useLocation } from "react-router-dom"; // 1. Import useLocation

export function Button1({ children1, to }){
    const navigate = useNavigate();
    const location = useLocation(); // 2. Get the active URL path (e.g., "/focus")

    // 3. Independent Check: Does this specific button's path match the current browser path?
    const isActive = location.pathname === to;

    const handleleclick = () => {
        navigate(to);
    }

    return(
        <div className="poqwed">
            {/* 4. Only the matching button gets the "active-btn" class name! */}
            <button 
                className={`button1 ${isActive ? "active-btn" : ""}`} 
                onClick={handleleclick}
            >
                {children1}
            </button>
        </div>
    )
}
