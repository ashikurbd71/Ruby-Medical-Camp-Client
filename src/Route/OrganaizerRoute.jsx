
import { Navigate, } from 'react-router-dom';

import Loader from '../Shared/Loader';
import useRole from '../Hook/userRole';

const OrganizerRoute = ({children}) => {

     const[role,isLoading] = useRole()
     
   

     if(isLoading){

        return <Loader/>
     }

     if(role === 'organizer'){

        return children
     }else{
        return <Navigate to={'/'}replace></Navigate>
     }
 

};

export default OrganizerRoute;