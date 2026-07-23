import API from "./axios"


export const getTasks = async (date) => {

    const response = await API.get(`/task/read/${date}`,{
        
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

export const deleteTasks = async (children5) => {
    
    const response = await API.delete(`/task/delete/${children5}`,{
        
    })

    alert(response.data.message)
}