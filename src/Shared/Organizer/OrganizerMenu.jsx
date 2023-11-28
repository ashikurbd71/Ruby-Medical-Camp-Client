import React from 'react';
import { MdAddBusiness } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md"
import { MdManageAccounts } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LuCalendarClock } from "react-icons/lu";
import { MdAddHomeWork } from "react-icons/md";
const OrganizerMenu = () => {
    return (
        <div>
            

    <ul className="mt-6 space-y-5">
      <li>
       <Link to={'/dashboard/add-a-camp'}>
       <button
          href=""
          className="block w-full lg:text-lg rounded-lg  hover:bg-gray-100 px-2 py-2   font-medium text-black"
        >
          <div className='flex items-center gap-2'>
          <MdAddBusiness className='text-2xl'/> 
        <h1>  Add Camps</h1>
          </div>

        </button>
       </Link>
      </li>

   

      <li>
        <Link to={'/dashboard/manage-camps'}>
        <button
          href=""
          className="block lg:text-lg  rounded-lg px- py-2 w-full font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >
            <div className='flex items-center gap-2'>
          <MdOutlineManageHistory className='text-2xl'/> 
        <h1>Manages Camps</h1>
          </div>
       
        </button>
        </Link>
      </li>


      <li>
       <Link to={'/dashboard/manage-registered-camps'}>
       <button
          href=""
          className="block lg:text-lg  w-full rounded-lg  py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >
              <div className='flex items-center gap-1'>
          <MdManageAccounts className='text-2xl'/> 
        <h1>Manages Register</h1>
          </div>
      
        </button>
       </Link>
      </li>


      <span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>

  <span className="h-px flex-1 bg-black"></span>
</span>
      
      <li>
       <Link to={'/dashboard/add-upcoming-camp'}>
       <button
          href=""
          className="block lg:text-lg  w-full rounded-lg  py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >
              <div className='flex items-center gap-1'>
          <LuCalendarClock className='text-xl'/> 
        <h1>UpComing Camp</h1>
          </div>
      
        </button>
       </Link>
      </li>


      <li>
       <Link to={'/dashboard/manage-upcoming-camps'}>
       <button
          href=""
          className="block lg:text-lg  w-full rounded-lg  py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
        >
              <div className='flex items-center gap-1'>
          <MdAddHomeWork className='text-lg'/> 
        <h1>Manage Upcaming Camps</h1>
          </div>
      
        </button>
       </Link>
      </li>

     
    </ul>

        </div>
    );
};

export default OrganizerMenu;