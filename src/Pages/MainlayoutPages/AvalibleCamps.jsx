import React from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/avalible.jpg'
import { Helmet } from 'react-helmet';
import useAuth from '../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoissecure from '../../Hook/Axoissecure';

const AvalibleCamps = () => {

  const { user, loading } = useAuth()

   console.log(user?.email)
  const { data, isLoading } = useQuery({
    queryKey: ['campinfo'],
    enabled: !loading && !!user?.email,
    queryFn: async () => await axoissecure.get('/all-camp'),
    
  
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
               <dt className="sr-only">Price</dt>
       
               <dd className="text-sm text-gray-500">$240,000</dd>
             </div>
       
             <div>
               <dt className="sr-only">Address</dt>
       
               <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
             </div>
           </dl>
       
           <div className="mt-6 flex items-center gap-8 text-xs">
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
               <svg
                 className="h-4 w-4 text-indigo-700"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                 />
               </svg>
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500">Parking</p>
       
                 <p className="font-medium">2 spaces</p>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
               <svg
                 className="h-4 w-4 text-indigo-700"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                 />
               </svg>
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500">Bathroom</p>
       
                 <p className="font-medium">2 rooms</p>
               </div>
             </div>
       
             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
               <svg
                 className="h-4 w-4 text-indigo-700"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                 />
               </svg>
       
               <div className="mt-1.5 sm:mt-0">
                 <p className="text-gray-500">Bedroom</p>
       
                 <p className="font-medium">4 rooms</p>
               </div>
               <a
  className="group  relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  <span className="absolute -end-full transition-all  group-hover:end-4">
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
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="text-sm   font-medium transition-all group-hover:me-4">
    Join
  </span>
</a>
             </div>
           </div>
         </div>
       </a>
       


              </div>
              
              
              
              
              )
          }
</div>
        </Container>
        </>
    );
};

export default AvalibleCamps;