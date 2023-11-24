import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/MainlayoutPages/Home";
import AvalibleCamps from "../Pages/MainlayoutPages/AvalibleCamps";
import ContactUs from "../Pages/MainlayoutPages/ContactUs";

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
        }
     ]
    }
  ]);

  export default router