import API from "./axios.js"

export const signup = async (first,last,ema,pass) => {
    const response = await API.post("/user/signup",{
        firstname : first,
        lastname : last,
        email:ema,
        password :pass
    });

    localStorage.setItem("token",response.data.Token)
alert(response.data.message)
    return response;
}