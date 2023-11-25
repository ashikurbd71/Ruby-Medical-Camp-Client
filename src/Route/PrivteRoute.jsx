
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Loader from '../Shared/Loader';

const PrivteRoute = ({children}) => {

     const {user,loading} = useAuth()
     
     const location = useLocation()

     if(loading){

        return <Loader/>
     }

     if(user){

        return children
     }else{
        return <Navigate to={'/signin'} state={location.pathname} replace></Navigate>
     }
 

};

export default PrivteRoute;