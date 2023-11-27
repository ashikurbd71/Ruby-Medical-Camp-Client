import React, { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import Container from '../../../Shared/Container';
import { Helmet } from 'react-helmet';
import useAuth from '../../../Hook/useAuth';
import useRole from '../../../Hook/userRole';
import InfoAddModal from '../../../Modal/InfoAddModal';
import { useQuery } from '@tanstack/react-query';
import { getHealthcaredata } from '../../../API/userData';

const HealthcraeProfile = () => {

    const[isOpen,setIsOpen] = useState(false)
    const closeModal = () => {

        setIsOpen(false)
    }
    const handleadd = () => {

        setIsOpen(true)
    }


   

     

     const { user, loading } = useAuth()

     console.log(user?.email)
    const { data: info, isLoading } = useQuery({
      
      enabled: !loading && !!user?.email,
      queryFn: async () => await getHealthcaredata(user?.email),
      queryKey: ['healthcare'],
      
    })
  
   
  

  console.log(info)

    return (
     <>


        <div>
            <SectionTitle heading={'Healthcare Profile'} title={'Welcome My Profile'}/>
        </div>

        <Container>

        <div className='flex mb-10 bg-gary-300 justify-center items-center h-full w-full'>
      <Helmet>
        <title> HelatCare Profile</title>
      </Helmet>
      <div className=' min-h-secreen shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
         
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
            //   src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-[#1976D2] rounded-full'>
            {/* {role && role.toUpperCase()} */}
          </p>
        
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-center text-sm text-gray-600 '>
              
              <div className='flex flex gap-3'>
                <InfoAddModal closeModal={closeModal} isOpen={isOpen} />
                <button onClick={handleadd} className='bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1'>
                 Add Details
                </button>
                
                <button className='bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1'>
                 Update Profile
                </button>
                
              </div>

            </div>

 <hr className='my-3'/>
              <div className='grid w-full mx-auto grid-cols-3 gap-3'>

          <div className='flex flex-col '>

            <h1 className='text-xl  font-semibold'>Name:</h1>
              <p className='text-lg  font-extralight'>h</p>
          </div>


<div className='flex flex-col '>

            <h1 className='text-xl  font-semibold'>certifications:</h1>
              <img src="" alt="" className='h-16 w-16 rounded-lg object-cover shadow-sm' />
          </div>

          <div className='flex flex-col '>

            <h1 className='text-xl  font-semibold'>About:</h1>
              <p className='text-lg  font-extralight'>Email:</p>
              <p className='text-lg  font-extralight'>Phone:</p>
              <p className='text-lg  font-extralight'>Location:</p>
              <p className='text-lg  font-extralight'>specialty:</p>

            
          </div>

              </div>
          </div>
        </div>
      </div>
    </div>


        </Container>
     </>

    )
};

export default HealthcraeProfile;