import axios from "axios";

const axoissecure = axios.create({

    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
    
})

export default axoissecure