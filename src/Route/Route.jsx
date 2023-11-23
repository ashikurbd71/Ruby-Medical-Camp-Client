import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/MainlayoutPages/Home";

const router = createBrowserRouter([
    {
     path:'/',
     element: <MainLayout/>,
     children:[
        {
         path:'/',
         element:<Home/>
        }
     ]
    }
  ]);

  export default router