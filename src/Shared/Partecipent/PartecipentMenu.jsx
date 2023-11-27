import React from 'react';
import { FaBook, FaPaypal, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PartecipentMenu = () => {
    return (
        <div>
                    <div>
            

            <ul className="mt-6 space-y-5">
              <li>
               <Link to={'/dashboard/registered-camps'}>
               <button
                  href=""
                  className="block w-full lg:text-lg rounded-lg  hover:bg-gray-100 px-2 py-2   font-medium text-black"
                >
                  <div className='flex items-center gap-1'>
                  <FaBook className='text-2xl'/> 
                <h1>RegisteredCamp</h1>
                  </div>
        
                </button>
               </Link>
              </li>
        
           
        
              <li>
                <Link to={'/dashboard/payment-history'}>
                <button
                  href=""
                  className="block lg:text-lg  rounded-lg px- py-2 w-full font-medium text-black hover:bg-gray-100 hover:text-gray-700"
                >
                    <div className='flex items-center gap-1'>
                  <FaPaypal className='text-2xl'/> 
                <h1>Payment History</h1>
                  </div>
               
                </button>
                </Link>
              </li>
        
        
              <li>
               <Link to={'/dashboard/feedback-and-ratings'}>
               <button
                  href=""
                  className="block lg:text-lg  w-full rounded-lg  py-2  font-medium text-black hover:bg-gray-100 hover:text-gray-700"
                >
                      <div className='flex items-center gap-1'>
                  <FaQuoteLeft className='text-2xl'/> 
                 <h1>Feedback Rating</h1>
                  </div>
              
                </button>
               </Link>
              </li>
        
             
            </ul>
        
                </div>
        </div>
    );
};

export default PartecipentMenu;