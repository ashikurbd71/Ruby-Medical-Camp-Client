import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoispublic from '../Hook/AxoissecurePublic';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaCalendar, FaClock, FaLocationArrow, FaServicestack, FaUser, FaUsers } from 'react-icons/fa';
import Container from '../Shared/Container';
const PopularMedicalCamps = () => {
 
// 

const { user, loading } = useAuth()

console.log(user?.email)
const { data: popularcamp, isLoading } = useQuery({
 queryKey: ['popular',user?.email],
 
 queryFn: async () =>  {return await axoispublic('/show-home')},

 
})
console.log(popularcamp)


    return (
      
       <>
        <SectionTitle title={' Insights into Successful and Popular Medical Camps'} heading={'Popular Medical Camps'}></SectionTitle>
        
        <Container>
     
            <div   data-aos="fade-up"
     data-aos-duration="3000"  className='grid lg:grid-cols-3 gap-4 mb-10 grid-cols-1 max-w-[1250px] mx-auto' >
             
                  {
                    popularcamp?.data?.map(camp =>

                      <div   data-aos="fade-up"
                      data-aos-duration="3000" key={camp.id}>

<a href="#" className="block rounded-lg p-4 lg:h-[500px] shadow-sm bg-[#FFFFFF] ">
         <img
           alt="Home"
           src={camp?.image}
           className="h-[170px] w-full rounded-md object-cover"
         />
       
         <div className="mt-2">
           <dl>
             <div>
               <dt className="sr-only">Feee</dt>
       
               <div className='flex  justify-between'>
               <dd className="text-xl text-gray-500">${camp?.fees}</dd>
               <h1 className='px-3 py-2 text-[#1976D2] text-lg font-semibold '> Join {camp?.count}</h1>
               </div>

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


         


             <Link to={`/camp-details/${camp?._id}`}>
              
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



                      </div>
                    
         )
                  }
                </div>
               
           
    

     
     <Link to={'/avaliblecamps'}>        
     <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[200px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>See More Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div></Link>
        </Container>
        </>
         );

  
};

export default PopularMedicalCamps;


 