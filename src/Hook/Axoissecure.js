import axios from "axios";
import { removeToken } from "../API/userData";

const axoissecure = axios.create({

    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
    
})


// interceptor response and error

axoissecure.interceptors.response.use(response => response
    ,
    
    async error => {

        console.log('error from axoissecure',error.response)

        if(error.response &&
            
           ( error.response.status === 401 || error.response.status === 403)
            
            ){
                await removeToken()
                window.location.replace('/signin')
            }

            return Promise.reject(error)})

export default axoissecure