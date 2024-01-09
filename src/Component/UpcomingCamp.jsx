import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import axoispublic from '../Hook/AxoissecurePublic';
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaLocationArrow, FaServicestack, FaUser, FaUsers } from 'react-icons/fa';
import Container from '../Shared/Container';
const UpcomingCamp = () => {
 

  const { user, loading } = useAuth()

     
     const { data: upcoming, isLoading,refetch } = useQuery({
      queryKey: ['upcoming',user?.email],
      // enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoispublic('/all-upcamingcamp')},
     
      
    })
 console.log(upcoming)

    return (
      
       <>
        <SectionTitle title={' Discover Tomorrows Path to Health Today'} heading={'Upcoming Camps'}></SectionTitle>
        
        <Container>

        <div   data-aos="fade-up"
     data-aos-duration="3000"  className='grid lg:grid-cols-3 gap-4 mb-10 grid-cols-1 max-w-[1250px] mx-auto' >
             
                  {
                    upcoming?.data?.map(camp =>
                      <div key={camp.id}>

<a href="#" className="block rounded-lg p-4 lg:h-[500px] shadow-sm bg-[#FFFFFF]">
         <img
           alt="Home"
           src={camp?.image}
           className="h-[170px] w-full rounded-md object-cover"
         />
       
         <div className="mt-2">
           <dl>
             <div>
               <dt className="sr-only">Feee</dt>
       
             
               <dd className="text-xl text-gray-500">${camp?.fees}</dd>
               
               

             </div>
       
             <div>
               <dt className="sr-only">Camp Name</dt>
       
               <dd className="font-medium text-xl">{camp?.campname}</dd>

                <div className='flex mt-3 items-center gap-1'>
                  <FaUser className='text-xl'/>
                <dd className="font-normal text-xl">{camp?.professional}</dd>
                </div>

                <div className='flex mt-3 items-center gap-1'>
                  <FaServicestack className='text-xl'/>
                <dd className="font-normal text-xl">{camp?.services}</dd>
                </div>
           
                <div className='flex mt-3 items-center gap-1'>
                  <FaLocationArrow className='text-xl'/>
                <dd className="font-normal text-xl">{camp?.location}</dd>
                </div>
           
           
             </div>
             

             
           </dl>
           
           <div className="mt-6 flex items-center gap-5 text-xs">
             <div className="sm:inline-flex items-center flex sm:shrink-0 sm:items-center sm:gap-2">
               
              
            
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Date</p>
       
                <div className='flex gap-1 items-center'>
                <FaCalendar className='text-xl'/> 
                 <p className="font-medium text-lg">{camp?.date}</p>
                </div>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
             
        
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Time</p>

       <div className='flex gap-1 items-center'>
       <FaClock className='text-xl'/>
       
       <p className="font-medium text-lg">{camp?.time}</p>
       </div>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
             
             
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Target People</p>
                 <div className='flex items-center gap-1'>
                 <FaUsers className='text-xl'/>
                 <p className="font-medium text-lg">{camp?.audience}</p>
                 </div>
               </div>
              
        
             </div>


         


             <Link to={`/upcamingcamp-details/${camp?._id}`}>
              
              <a
  className="inline-block rounded-full border border-[#08C1E7] p-2  hover:bg-[#08C1E7] hover:text-white focus:outline-none "
  href="/download"
>
  <span className="sr-only"> camp detils</span>

  <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>
              </Link>

            

           </div>
         </div>
       </a>



                      </div> )
                  }
   
   </div>
               
   
       
         
 
        </Container>
        </>
         );

  
};

export default UpcomingCamp;


 