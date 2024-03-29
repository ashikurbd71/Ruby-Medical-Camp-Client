import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/avalible.jpg'
import { Helmet } from 'react-helmet';
import useAuth from '../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoissecure from '../../Hook/Axoissecure';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaLocationArrow, FaServicestack, FaUser, FaUsers } from 'react-icons/fa';


  

const AvalibleCamps = () => {



  const { user, loading } = useAuth()

  console.log(user?.email)
 const { data, isLoading,refetch } = useQuery({
   queryKey: ['campinfo'],
   enabled: !loading && !!user?.email,
   queryFn: async () => await axoissecure.get(`/all-camp`),
  
 
 }
 
 )

 console.log(data?.data)

 useEffect(() => {
  setCamps(data)
}, [isLoading])

// console.log(foods)

  const [input, setInput] = useState('');
  const [camps, setCamps] = useState();


 


  const handsearch = async (event) => {

       const res = await axoissecure.get(`/all-camp?search=${input}`)
        setCamps(res);
        setInput('');
  }

 

    return (
        <>

   
<Helmet>
        <title>R M C || AvalibleCamps</title>
        
    </Helmet>


        <div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px]  bg-fixed lg:mb-10' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      
<div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='text-center lg:pt-44 pt-20 md:pt-20'>

 <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='lg:text-5xl font-bold text-[#1976D2]  text-2xl'>Ruby Medical Camps</h1>
 <div className=' flex justify-center lg:pb-0 pb-5'>
 <p className='text-[#fff] lg:w-[60%] lg:text-xl font-medium py-4'>Welcome to Ruby Medical Camps, where health meets compassion! Our mission is to provide accessible healthcare to all, and our medical camps are designed to bring quality services directly to the community. Join us for a day of wellness, featuring free health check-ups, consultations with skilled healthcare professionals, and informative sessions on leading a healthy lifestyle</p>
 </div>
</div>



<div className="relative mx-20 py-8 ">
  <label for="Search" className="sr-only"> Search </label>

  <input
    type="text"
    onChange={(e) => setInput(e.target.value)}
    id="Search"
    placeholder="Search for Camp Name"
    className="w-full  rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button onClick={handsearch} type="button" className="text-gray-600 hover:text-gray-700">
     

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
          
          <div   data-aos="fade-up"
     data-aos-duration="3000" className='grid lg:grid-cols-3 gap-4 mb-10 grid-cols-1 max-w-[1250px] mx-auto'>
          {
            camps?.data?.map(item => 
              
              
              <div key={item?._id} >

         <a href="#" className="block rounded-lg p-4 lg:h-[500px] shadow-sm bg-[#FFFFFF]">
         <img
           alt="Home"
           src={item?.image}
           className="h-[170px] w-full rounded-md object-cover"
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
  className="inline-block rounded-full border border-[#08C1E7] p-2  hover:bg-[#08C1E7] hover:text-white focus:outline-none"
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
       

       
        </Container>
        </>
    );
};

export default AvalibleCamps;