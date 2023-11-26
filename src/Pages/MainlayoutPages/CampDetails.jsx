import React, { useState } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { FaCalendar, FaClock, FaLocationArrow, FaServicestack, FaUser, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useRole from '../../Hook/userRole';
import useAuth from '../../Hook/useAuth';
import RegsiterModal from '../../Modal/RegsiterModal';
const CampDetails = () => {
    const[isOpen,setIsOpen] = useState(false)
    const closeModal = () => {

        setIsOpen(false)
    }
  const item = useLoaderData()
  console.log(item)
  const [role] = useRole()
  const {user} = useAuth
    return (
     <>
        <div className='my-20'>

           <div>
           <SectionTitle  heading={'Camp Details'} title={' Click Join Button And Register'}></SectionTitle>
           </div>
            <Container>

            <a href="#" className="w-full mb-5 rounded-lg p-4 shadow-sm shadow-indigo-100">
         <img
           alt="Home"
           src={item?.image}
           className="h-full w-full rounded-md object-cover"
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

               <dd className="font-normal text-xl mt-3">{item?.message}</dd>
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
           
           <div className="mt-6 flex items-center gap-8 text-xs">
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


             <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">



             </div>


{

    role === 'participants' ?
    <button 
    onClick={()=> setIsOpen(true) }

className="inline-block rounded border border-current px-8 py-3 text-lg font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
href="/download"
>
Join 
</button> : ''
}

            

           </div>
         </div>
       </a>

            </Container>
            
            </div>

            <RegsiterModal closeModal={closeModal} item={item} isOpen={isOpen}></RegsiterModal>
     </>
    );
};

export default CampDetails;