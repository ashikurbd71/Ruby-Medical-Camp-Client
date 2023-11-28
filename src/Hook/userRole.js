import { useQuery } from '@tanstack/react-query'
import { getRole } from '../API/userData'
import useAuth from './useAuth'

const useRole = () => {
  const { user, loading } = useAuth()

   console.log(user?.email)
  const { data: role, isLoading } = useQuery({
    queryKey: ['userbyregister',user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () =>  {return await getRole(user?.email)},
   
    
  })

  return [role, isLoading]
 
}


export default useRole