';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivteRoute = ({children}) => {

     const {user,loading} = useAuth()
     
     const location = useLocation()

     if(loading){

        return <Loader/>
     }

     if(user){

        return children
     }else{
        return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
     }
 

};

export default PrivteRoute;