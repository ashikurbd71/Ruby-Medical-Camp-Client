import { useQuery } from '@tanstack/react-query'
import { getRole } from '../API/userData'
import useAuth from './useAuth'

const useRole = () => {
  const { user, loading } = useAuth()

   console.log(user?.email)
  const { data: role, isLoading } = useQuery({
    
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ['user'],
    
  })

  return [role, isLoading]
 
}


export default useRole