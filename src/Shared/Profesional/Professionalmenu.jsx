import React from 'react';
import { FaBook, FaList, FaPaypal, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Professionalmenu = () => {
    return (
        <div>
             <div>
                    <div>
            

            <ul className="mt-6 space-y-5">
              <li>
               <Link to={'/dashboard'}>
               <button
                  href=""
                  className="block w-full lg:text-lg rounded-lg  hover:bg-gray-100 px-2 py-2   font-medium text-black"
                >
                  <div className='flex items-center gap-1'>
                  <FaList className='text-xl'/> 
                <h1>Accepted Camp</h1>
                  </div>
        
                </button>
               </Link>
              </li>
        
           
        
              <li>
                <Link to={'/dashboard/professional-profile'}>
                <button
                  href=""
                  className="block lg:text-lg  rounded-lg px- py-2 w-full font-medium text-black hover:bg-gray-100 hover:text-gray-700"
                >
                    <div className='flex items-center gap-1'>
                  <FaUser className='text-2xl'/> 
                <h1>Profile</h1>
                  </div>
               
                </button>
                </Link>
              </li>
        
        
           
        
             
            </ul>
        
                </div>
        </div>
        </div>
    );
};

export default Professionalmenu;