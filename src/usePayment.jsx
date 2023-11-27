import { useQuery } from "@tanstack/react-query";
import useAuth from "./Hook/useAuth";
import axoissecure from "./Hook/Axoissecure";


const usePayment = () => {

    
     const{user} = useAuth()
     const { data,refetch } = useQuery({
         queryKey:['cart',user?.email],
         queryFn: async () => {
     
             const res = await axoissecure.get(`/register-camp/email/${user?.email}`)
             return res.data
         }
     })
 
     return {data,refetch}
 
 };
 
 export default usePayment;