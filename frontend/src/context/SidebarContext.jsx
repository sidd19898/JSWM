// src/context/SidebarContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Initialize with null default value
const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [show, setShow] = useState(false);

  return (
    // 2. Pass the exact state and setter into the Provider value block
    <SidebarContext.Provider value={{ show, setShow }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  
  // 3. Keep your safety guard check to catch disconnected pages
  if (!ctx) {
    throw new Error("useSidebar must be used inside a SidebarProvider");
  }
  return ctx;
}
