import React from 'react';
import { Outlet } from "react-router-dom";
import Navber from '../../Shared/Navber';
import Footer from '../../Shared/Footer';

const MainLayout = () => {
    return (

      <>

        <div>
  <Navber/>
       <div className='min min-h-screen'>
       <Outlet/>
       </div>
   <Footer/>
        </div>
      </>
    );
};

export default MainLayout;