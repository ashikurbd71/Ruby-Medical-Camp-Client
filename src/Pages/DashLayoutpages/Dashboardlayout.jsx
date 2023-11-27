import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import img from '../../assets/logo.png'

import { FaClock, FaHome } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa"
import OrganizerMenu from '../../Shared/Organizer/OrganizerMenu';
import useAuth from '../../Hook/useAuth';
import useRole from '../../Hook/userRole';
import { Helmet } from 'react-helmet';
import PartecipentMenu from '../../Shared/Partecipent/PartecipentMenu';
import Professionalmenu from '../../Shared/Profesional/Professionalmenu';
const Dashboardlayout = () => {

  const{user,logOut} = useAuth()

  const [role] = useRole()
  console.log('role--->',role)
    return (
<>
      <Helmet>
        <title>R M C || DashBoard</title>
        
    </Helmet>
        <div>
           
           <div className=" min-h-screen flex  border-e">
  <div className="px-12 py-6 bg-[#1976D2]">
  <span
      className="grid h-10  w-full place-content-center rounded-lg  text-black"
    >
    <Link to={'/'}>
    
      <div className='flex'>
        <img src={img} alt="" className='w-10' />
        <h1 className='text-lg font-bold'>Ruby Medical Camps </h1>
      </div>

    </Link>
    </span>


   {/* menu */}

     {role === 'organizer' && <OrganizerMenu/>}
     {role === 'participants' && <PartecipentMenu/>}
     {role === 'professionals' && <Professionalmenu/>}

     

    <span className="flex py-6 items-center">

  <span className="h-px flex-1 bg-black"></span>
</span>

{/* home route */}

<Link to={'/'}>
       <button
          href=""
          className="block text-lg mb-3  w-full rounded-lg px-2 py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >

<div className='flex items-center  gap-1'>
          <FaHome className='text-xl'/> 
        <h1> Home</h1>
          </div>
        
        </button>
       </Link>

       <Link to={'/avaliblecamps'}>
       <button
          href=""
          className="block text-lg mb-3  w-full rounded-lg px-2 py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >

<div className='flex items-center gap-2'>
          <FaHandHoldingMedical className='text-2xl'/> 
        <h1> Avalible Camps</h1>
          </div>
       
        </button>
       </Link>  


       <Link to={'/'}>
       <button
          href=""
          className="block text-lg  w-full rounded-lg px-2 py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >

<div className='flex items-center gap-2'>
          <FaClock className='text-xl'/> 
        <h1>UpComing </h1>
          </div>
       
        </button>
       </Link>  
      

      
{/* user */}
   <Link to={'/dashboard/profile'}>
   
   <div className=" mt-10 inset-x-0 bottom-0 border-t">
    <a href="#" className="flex gap-2 items-center  mt-5 w-full ">
      <img
        alt="Man"
        src={user?.photoURL}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium text-black">{user?.displayName}</strong>

          <span> {user?.email} </span>
        </p>
      </div>
    </a>
  </div>
   </Link>
  </div>

  
   <div className='w-full h-full col-span-8'>

    <Outlet/>

   </div>
  
</div>

        </div>
        </>
    );
};

export default Dashboardlayout;