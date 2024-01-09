import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useRole from "../../../Hook/userRole";
import { Helmet } from "react-helmet";
import Container from "../../../Shared/Container";

import axoissecure from "../../../Hook/Axoissecure";
import { useQuery } from "@tanstack/react-query";

import PartecipentProfileModal from "../../../Modal/PartecipentProfileModal";
import PartecipentUpdateModal from "../../../Modal/PartecipentUpdateModal";
import img from '../../../assets/27202.jpg'

const PartrcipentProfile = () => {
  const { user, logOut,loading } = useAuth();
  const [role] = useRole();
  console.log(user);

  const [isOpen,setIsOpen] = useState(false)
  const[Opens,setOpens] = useState(false)

  const closeModalss = () => {

    setOpens(false)
  }

  const closeModal = () => {

       setIsOpen(false)
  }

  const handlelogout = () => {
    logOut();
  };





     
     const { data: partecipentdata,refetch } = useQuery({
      queryKey: ['partecipentdatainfo',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoissecure.get(`healthcareprofile/email/${user?.email}`)},
     
      
    })


    console.log(partecipentdata?.data)



 


    
 


   

  return (
    <div>
      <SectionTitle heading={"Organizer Profile"} title={"Welcame My Profile"}>
        {" "}
      </SectionTitle>

      <Container>
        <div className="w-full min-h-screen">
          <Helmet>
            <title>Dashboard || Partecipent Profile</title>
          </Helmet>
          <div className="bg-[#dad7cd] shadow-lg rounded-2xl ">
            <img
              alt="profile"
                src={img}
              className="w-full mb-4 rounded-t-lg h-64"
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

   partecipentdata?.data?.email === user?.email ? '' :
                 <button onClick={() => setOpens(true)} className="bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1">
                    Create Profile
                  </button>
                
                }
              
                <button onClick={() => setIsOpen(true)} className="bg-[#1976D2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2]">
                  Update Profile
                </button>
              
                <PartecipentUpdateModal isOpen={isOpen} closeModal={closeModal} refetch={refetch} partecipentdata={partecipentdata?.data}/> 
                <PartecipentProfileModal closeModalss={closeModalss} refetch={refetch} Opens={Opens}></PartecipentProfileModal> 
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
              <span className="font-bold text-black ">{partecipentdata?.data.phone}</span>
            </p>

            <p className="flex flex-col">
              Adress
              <span className="font-bold text-black ">{partecipentdata?.data.adress}</span>
            </p>
          </div>

          <div className="grid grid-cols-8">
            <div className="span col-span-4 mt-5">
              <h1 className="text-lg font-medium">
                {" "}
                personal preferences :{" "}
              </h1>
              {partecipentdata?.data.preferences}
            </div>
            <div className="span mt-5 col-span-4">
              <h1 className="text-lg font-medium"> Interests in specific medical areas : </h1>
             {partecipentdata?.data.Interests}
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

export default PartrcipentProfile;
