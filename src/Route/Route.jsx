import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/MainlayoutPages/Home";
import AvalibleCamps from "../Pages/MainlayoutPages/AvalibleCamps";
import ContactUs from "../Pages/MainlayoutPages/ContactUs";
import Dashboardlayout from "../Pages/DashLayoutpages/Dashboardlayout";
import AddCamp from "../Pages/DashLayoutpages/Organizers/AddCamp";
import ManagesCamp from './../Pages/DashLayoutpages/Organizers/ManagesCamp';
import ManagesRegister from "../Pages/DashLayoutpages/Organizers/ManagesRegister";
import SignUp from "../From/Signup";
import Signin from "../From/Signin";
import PrivteRoute from "./PrivteRoute";
import OrganizerRoute from "./OrganaizerRoute";
import Profile from "../Shared/Profile";
import UpdateCamp from "../Pages/DashLayoutpages/Organizers/UpdateCamp";
import CampDetails from "../Pages/MainlayoutPages/CampDetails";
import Registerdcamp from "../Pages/DashLayoutpages/Particepnts/Registerdcamp";
import FeedbackRatings from "../Pages/DashLayoutpages/Particepnts/FeedbackRatings";
import PaymentHistory from "../Pages/DashLayoutpages/Particepnts/PaymentHistory";
import HealthcraeProfile from "../Pages/DashLayoutpages/Professional/HealthcraeProfile";
import Professionalroute from "./Professionalroute";
// import Payment from "../Pages/DashLayoutpages/Particepnts/Payment";

const router = createBrowserRouter([
    {
     path:'/',
     element: <MainLayout/>,
     children:[
        {
         path:'/',
         element:<Home/>
        },
        {
         path:'/avaliblecamps',
         element:<PrivteRoute><AvalibleCamps/></PrivteRoute>
        },

          {
         path:'/camp-details/:campId',
         element:<PrivteRoute><CampDetails/></PrivteRoute>,
         loader: ({params}) => fetch (`http://localhost:5000/all-camp/${params.campId}`)
        },

        

        {
         path:'/contactus',
         element:<ContactUs/>
        },
        {
         path:'/signup',
         element:<SignUp/>
       },
       {
         path:'/signin',
         element:<Signin/>
       }
     ]
    },
    {
      path:'/dashboard',
      element:<PrivteRoute><Dashboardlayout/></PrivteRoute>,
      children:[


// ----------------------organizer routee-----------------------
         {
            path:'/dashboard/add-a-camp',
            element:<OrganizerRoute><AddCamp/></OrganizerRoute>
         },
         {
            path:'/dashboard/manage-camps',
            element:<OrganizerRoute><ManagesCamp/></OrganizerRoute>
         },
         {
            path:'/dashboard/manage-registered-camps',
            element:<OrganizerRoute><ManagesRegister/></OrganizerRoute>
         },
         {
            path:'/dashboard/profile',
            element:<PrivteRoute><Profile/></PrivteRoute>
         },
         {
            path:'/dashboard/update-camp/:campId',
            element:<OrganizerRoute><UpdateCamp/></OrganizerRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/all-camp/${params.campId}`)
         },


         // --------------------------- Partesipant Routee--------------------------------
       
         {
            path:'/dashboard/registered-camps',
            element:<PrivteRoute><Registerdcamp/></PrivteRoute>
           
         },
        
         {
            path:'/dashboard/feedback-and-ratings',
            element:<PrivteRoute><FeedbackRatings/></PrivteRoute>
           
         },

         {
            path:'/dashboard/payment-history',
            element:<PrivteRoute><PaymentHistory/></PrivteRoute>
           
         },
     
         // ------------------PROFESSINOL -------------------------

         {

            path:'/dashboard/professional-profile',
            element:<Professionalroute><HealthcraeProfile/></Professionalroute>
           
         }



      ]
    },
  
    
  ]);

  export default router