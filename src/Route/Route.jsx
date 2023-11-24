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
         element:<AvalibleCamps/>
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
      element:<Dashboardlayout/>,
      children:[

         {
            path:'/dashboard/addcamp',
            element:<AddCamp/>
         },
         {
            path:'/dashboard/managescamp',
            element:<ManagesCamp/>
         },
         {
            path:'/dashboard/managesregister',
            element:<ManagesRegister/>
         },
       
      ]
    },
  

  ]);

  export default router