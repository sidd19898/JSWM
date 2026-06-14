import API from "./axios"

export const getTasks = async () => {

    const response = await API.get("/task/read",{
        
    });

   alert(response.data.message)
   return response.data.data
}