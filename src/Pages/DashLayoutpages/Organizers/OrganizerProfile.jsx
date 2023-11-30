import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useRole from "../../../Hook/userRole";
import { Helmet } from "react-helmet";
import Container from "../../../Shared/Container";

import OrganizerProfileModal from "../../../Modal/OrganizerProfileModal";
import axoissecure from "../../../Hook/Axoissecure";
import { useQuery } from "@tanstack/react-query";
import OrganizerUpdateModal from "../../../Modal/OrganizerUpdateModal";

const OrganizerProfile = () => {
  const { user, logOut,loading } = useAuth();
  const [role] = useRole();
  console.log(user);

  const [isOpen,setIsOpen] = useState(false)
  const[Open,setOpen] = useState(false)

  const closeModals = () => {

    setOpen(false)
  }

  const closeModal = () => {

       setIsOpen(false)
  }

  const handlelogout = () => {
    logOut();
  };





     
     const { data: info, isLoading,refetch } = useQuery({
      queryKey: ['updatebyprossionalprofileinfo',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoissecure.get(`healthcareprofile/email/${user?.email}`)},
     
      
    })

    // console.log(info?.data)


    const { data: organozercamp } = useQuery({
      queryKey: ['organozercamps',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoissecure.get(`/add-a-camp/${user?.email}`)},
     
      
    })

    // console.log(organozercamp?.data)


    
    const { data: feedbacks } = useQuery({
      queryKey: ['feedbackS',role],
      enabled: !loading && !!role,
      queryFn: async () =>  {return await axoissecure.get(`/feedback-camp/email/${user?.email}`)},
     
      
    })

    console.log(feedbacks?.data)


   

  return (
    <div>
      <SectionTitle heading={"Organizer Profile"} title={"Welcame My Profile"}>
        {" "}
      </SectionTitle>

      <Container>
        <div className="w-full min-h-screen">
          <Helmet>
            <title>Dashboard || Organizer Profile</title>
          </Helmet>
          <div className="bg-[#dad7cd] shadow-lg rounded-2xl ">
            <img
              alt="profile"
              //   src={img}
              className="w-full mb-4 rounded-t-lg h-36"
            />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src={user.photoURL}
                  className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
                />
              </a>

              <p className="p-2 px-4 text-xs text-white bg-[#1976D2] rounded-full">
                {role && role.toUpperCase()}
              </p>
              <p className="mt-2 text-xl font-medium text-gray-800 ">
                User Id: {user.uid}
              </p>
              <div className="flex mt-5 lg:flex-row flex-col  gap-3">
                {
                    user.email === info?.data?.email ? '' : <button onClick={() => setIsOpen(true)} className="bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1">
                    Create Profile
                  </button>
                
                }
              
                <button onClick={() => setOpen(true)} className="bg-[#1976D2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2]">
                  Update Profile
                </button>
              
                <OrganizerProfileModal isOpen={isOpen} closeModal={closeModal}/>
                <OrganizerUpdateModal closeModals={closeModals} refetch={refetch} Open={Open} info={info}></OrganizerUpdateModal>
                <button
                  onClick={handlelogout}
                  className="bg-[#1976D2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2]"
                >
                  Logout
                </button>
              </div>

              <div className="w-auto   p-2 mt-4 rounded-lg">
                <div className="grid gap-10 lg:grid-cols-4 grid-cols-1text-sm text-gray-600 ">
                  <p className="flex flex-col">
                    Name
                    <span className="font-bold text-black ">
                      {user.displayName}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Email
                    <span className="font-bold text-black ">{user.email}</span>
                  </p>


 
         
   
            <p className="flex flex-col">
              Phone
              <span className="font-bold text-black ">{info?.data?.phone}</span>
            </p>

            <p className="flex flex-col">
              Adress
              <span className="font-bold text-black ">{info?.data?.adress}</span>
            </p>
          </div>

          <div className="grid grid-cols-8">
            <div className="span col-span-4 mt-5">
              <h1 className="text-lg font-medium">
                {" "}
                Organizer impact :{" "}
              </h1>
              {info?.data?.impact}
            </div>
            <div className="span mt-5 col-span-4">
              <h1 className="text-lg font-medium"> Success Stroy : </h1>
             {info?.data?.story}
            </div>
          </div>

    
       

 

                 <div className="mt-5 grid grid-cols-8">

                    <div className="span col-span-4">
                    <h1 className="text-xl  font font-medium my-3"> Organized camps : </h1>
                      <div className="grid grid-cols-2 gap-2">

                     

                      {
                       
                       organozercamp?.data?.map(infos => 

                        <div key={infos?._id}>
                        <img src={infos?.image} alt="" className="w-20 h-10"  />
                     <p className="text-sm">{infos?.campname}</p>
                       </div>
                       )


                      }
                      </div>
 
                    </div>


                     <div className="span col-span-4">
                     <h1 className="text-xl  font font-medium my-3"> Partecipent Feedback : </h1>
                        <div className=" grid grid-cols-2 gap-2">
                            {

                             feedbacks?.data?.map(infoss => 
                              

                              <div key={infoss?._id}>
                              <div className='flex  justify-center item-center'>
                              <img src={infoss?.photo} alt="" className="rouned rounded-full w-10 h-10" />
                              </div>
                           <p className="text-center">{infoss?.feedback}</p>

                             </div>
                              )

                            }
                        </div>

                     </div>

                 </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrganizerProfile;
