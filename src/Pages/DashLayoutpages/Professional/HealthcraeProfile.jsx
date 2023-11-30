import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import Container from '../../../Shared/Container';
import { Helmet } from 'react-helmet';
import useAuth from '../../../Hook/useAuth';
import useRole from '../../../Hook/userRole';
import InfoAddModal from '../../../Modal/InfoAddModal';
import { useQuery } from '@tanstack/react-query';
import { getHealthcaredata } from '../../../API/userData';
import Loader from '../../../Shared/Loader';
import img from '../../../assets/banner-2 (2).jpg'
import UpdateProfileModal from '../../../Modal/UpdateProfileModal';
import axoissecure from '../../../Hook/Axoissecure';

const HealthcraeProfile = () => {

    const[isOpen,setIsOpen] = useState(false)
    const[isOpens,setIsOpens] = useState(false)
   
    const closeModal = () => {

        setIsOpen(false)
    }

    const handleadd = () => {

        setIsOpen(true)
    }


    const handleupdate = () => {

      setIsOpens(true)

    }
    const closeModals = () => {

      setIsOpens(false)
  }

   

     
  const [role] = useRole()
  // const{infodata ,setinfodata} = useState(info)
     const { user, loading } = useAuth()

     
     const { data: info, isLoading,refetch } = useQuery({
      queryKey: ['updatebyprossionalprofile',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await getHealthcaredata(user?.email)},
     
      
    })


         
    const { data: organozercamp } = useQuery({

      queryKey: ['organozercamp',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoissecure.get(`/accpected-camp/${user?.email}`)},
     
      
    })
    // console.log(organozercamp)
 



    if(isLoading){
      return <Loader/>
    }
  
   
  

 

    return (
     <>


        <div>
            <SectionTitle heading={'Healthcare Profile'} title={'Welcome My Profile'}/>
        </div>

        <Container>

        <div className='flex mb-10 bg-gary-300 justify-center items-center h-full w-full'>
      <Helmet>
        <title> Dashbboard || HelatCare Profile</title>
      </Helmet>
      <div className=' min-h-secreen shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src={img}
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={info?.userimg}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-[#1976D2] rounded-full'>
            {role && role.toUpperCase()}
          </p>
        
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-center text-sm text-gray-600 '>
              
              <div className='flex flex gap-3'>
              <InfoAddModal closeModal={closeModal} isOpen={isOpen} refetch={refetch} />
               {
                info?.email === user?.email ?'':

              
                <button onClick={handleadd} className='bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1'>
                 Add Details
                </button>
               }
                
                 <UpdateProfileModal closeModals={closeModals} isOpens={isOpens} refetch={refetch} info={info} refetch={refetch}/>
                <button onClick={handleupdate} className='bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1'>
                 Update Profile
                </button>
                
              </div>

            </div>

 <hr className='my-3'/>

 {/* {
  info?.map(infos => )
}
   */}
              <div className='grid w-full mx-auto grid-cols-3 gap-1'>

        <div className='flex flex-col '>

            <h1 className='text-lg  font-semibold'>Name:</h1>
              <p className='text-lg  font-extralight'>{info?.name}</p>
          </div>


<div className='flex flex-col '>

            <h1 className='text-lg  font-semibold'>Certifications:</h1>
              <img src={info?.certimg?.url} alt="" className='h-16 w-28 rounded-lg object-cover shadow-sm' />
          </div>

          <div className='flex flex-col '>

            <h1 className='text-xl  font-semibold'>Information:</h1>
              <p className='text-lg  font-extralight'>Email: <span className=' font-medium text-sm'>{info?.emailid}</span></p>
              <p className='text-lg  font-extralight'>Phone:  <span className=' font-medium text-sm'>{info?.phone}</span></p>
              <p className='text-lg  font-extralight'>Location:  <span className=' font-medium text-sm'>{info?.location}</span></p>
              <p className='text-lg  font-extralight'>specialty:  <span className=' font-medium text-sm'>{info?.specialty}</span></p>

            
          </div>



    <h1 className='text-xl font-medium'>Your Interted Camp:</h1>
          <div className=" grid grid-cols-2 gap-2">
                            {

organozercamp?.data?.map(infoss => 
                              

                              <div key={infoss?._id}>
                              <div className='flex  justify-center item-center'>
                              <img src={infoss?.image} alt="" className="rouned rounded-full w-10 h-10" />
                              </div>
                           <p className="text-center">{infoss?.campname}</p>

                             </div>
                              )

                            }
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