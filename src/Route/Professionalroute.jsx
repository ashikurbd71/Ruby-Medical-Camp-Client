
import { Navigate, } from 'react-router-dom';
import useRole from '../Hook/userRole';
import Loader from '../Shared/Loader';


const Professionalroute = ({children}) => {

     const[role,isLoading] = useRole()
     
   

     if(isLoading){

        return <Loader/>
     }

     if(role === 'professionals'){

        return children
     }else{
        return <Navigate to={'/'}replace></Navigate>
     }
 

};

export default Professionalroute;