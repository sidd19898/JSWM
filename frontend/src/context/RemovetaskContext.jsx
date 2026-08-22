// src/context/RemovetaskContext.jsx
import { createContext, useContext, useState } from "react";

const RemovetaskContext = createContext(null);

export function RemovetaskProvider({ children }) {
  const [id, setid] = useState(null);
  return (
    <RemovetaskContext.Provider value={{ id, setid }}>
      {children}
    </RemovetaskContext.Provider>
  );
}

export function useRemovetask() {
  const ctx = useContext(RemovetaskContext);
  if (!ctx) throw new Error("useRemovetask must be used inside RemovetaskProvider");
  return ctx;
}