import React, { useState } from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/avalible.jpg'
import { Helmet } from 'react-helmet';
import useAuth from '../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoissecure from '../../Hook/Axoissecure';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaLocationArrow, FaServicestack, FaUser, FaUsers } from 'react-icons/fa';

const AvalibleCamps = () => {

  const[page,setPage] = useState(0)

  const { user, loading } = useAuth()

   console.log(user?.email)
  const { data, isLoading } = useQuery({
    queryKey: ['campinfo'],
    enabled: !loading && !!user?.email,
    queryFn: async () => await axoissecure.get(`/all-camp?page=${page}`),
    
  
  }
  
  
  )

  console.log(data?.data)

    return (
        <>

   
<Helmet>
        <title>R M C || AvalibleCamps</title>
        
    </Helmet>


        <div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px] my-16 bg-fixed lg:mb-10' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      
<div className='text-center lg:pt-44 pt-20 md:pt-20'>

 <h1 className='lg:text-5xl font-bold text-[#1976D2]  text-2xl'>Ruby Medical Camps</h1>
 <div className=' flex justify-center lg:pb-0 pb-5'>
 <p className='text-[#fff] w-[60%] text-xl font-medium py-4'>Welcome to Ruby Medical Camps, where health meets compassion! Our mission is to provide accessible healthcare to all, and our medical camps are designed to bring quality services directly to the community. Join us for a day of wellness, featuring free health check-ups, consultations with skilled healthcare professionals, and informative sessions on leading a healthy lifestyle</p>
 </div>
</div>



<div className="relative mx-20 py-8 ">
  <label for="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full  rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>


</div>
        <Container>
          
          <div className='grid lg:grid-cols-3 gap-4 mb-10 grid-cols-1'>
          {
            data?.data?.map(item => 
              
              
              <div key={item?._id} >

         <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
         <img
           alt="Home"
           src={item?.image}
           className="h-56 w-full rounded-md object-cover"
         />
       
         <div className="mt-2">
           <dl>
             <div>
               <dt className="sr-only">Feee</dt>
       
               <dd className="text-xl text-gray-500">${item?.fees}</dd>
             </div>
       
             <div>
               <dt className="sr-only">Camp Name</dt>
       
               <dd className="font-medium text-xl">{item?.campname}</dd>

                <div className='flex mt-3 items-center gap-1'>
                  <FaUser className='text-xl'/>
                <dd className="font-normal text-xl">{item?.professional}</dd>
                </div>

                <div className='flex mt-3 items-center gap-1'>
                  <FaServicestack className='text-xl'/>
                <dd className="font-normal text-xl">{item?.services}</dd>
                </div>
           
                <div className='flex mt-3 items-center gap-1'>
                  <FaLocationArrow className='text-xl'/>
                <dd className="font-normal text-xl">{item?.location}</dd>
                </div>
           
           
             </div>
             

             
           </dl>
           
           <div className="mt-6 flex items-center gap-5 text-xs">
             <div className="sm:inline-flex items-center flex sm:shrink-0 sm:items-center sm:gap-2">
               
              
            
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Date</p>
       
                <div className='flex gap-1 items-center'>
                <FaCalendar className='text-xl'/> 
                 <p className="font-medium text-lg">{item?.date}</p>
                </div>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
             
        
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Time</p>

       <div className='flex gap-1 items-center'>
       <FaClock className='text-xl'/>
       
       <p className="font-medium text-lg">{item?.time}</p>
       </div>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
             
             
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500 text-lg">Target People</p>
                 <div className='flex items-center gap-1'>
                 <FaUsers className='text-xl'/>
                 <p className="font-medium text-lg">{item?.audience}</p>
                 </div>
               </div>
              
        
             </div>


         


             <Link to={`/camp-details/${item?._id}`}>
              
              <a
  className="inline-block rounded-full border border-indigo-600 p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
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
       
<div
  className="inline-flex mb-10 w-full items-center justify-center rounded bg-blue-600 py-1 text-white"
>
  <button
   onClick={() => setPage(page -1)}
    href="#"
    className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
  >
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>

  <div>
    <label htmlFor="PaginationPage" className="sr-only">Page</label>

    <input
      type="number"
      className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-lg font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      min="1"
      value={page}
      id="PaginationPage"
    />
  </div>

  <span className="h-4 w-px bg-white/25"></span>

  <button
  onClick={() => setPage(page + 1)}
    href="#"
    className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
  >
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>
       
        </Container>
        </>
    );
};

export default AvalibleCamps;