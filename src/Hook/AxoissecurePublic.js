import axios from "axios";

const axoispublic = axios.create({

    baseURL:import.meta.env.VITE_API_URL,
  
    
})

export default axoispublic