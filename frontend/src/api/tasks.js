import ClickAwayListener from "@mui/material/ClickAwayListener";
import API from "./axios"

export const getTasks = async () => {

    const response = await API.get("/task/read",{
        
    });

   alert(response.data.message)
   return response.data.data
}

export const createTasks = async (title,from,to,date) => {
    
    const response = await API.post("/task/create",{
        title:title,
        from:from,
        to:to,
        date:date
    })

    alert(response.data.message)
}