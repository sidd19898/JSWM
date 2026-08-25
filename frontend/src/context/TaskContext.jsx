import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [Tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ Tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}