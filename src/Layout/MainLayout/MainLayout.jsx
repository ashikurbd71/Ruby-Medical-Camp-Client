import React from 'react';
import { Outlet } from "react-router-dom";
import Navber from '../../Shared/Navber';

const MainLayout = () => {
    return (

      <>

        <div>
  <Navber/>
        <Outlet/>
        
        </div>
      </>
    );
};

export default MainLayout;