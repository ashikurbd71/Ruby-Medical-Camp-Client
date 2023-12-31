import React, { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import Container from '../../../Shared/Container';
import useAuth from '../../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import { getemailCamp } from '../../../API/Register/Register';
import { getFeedback } from '../../../API/Feedback/Feedback';
import Loader from '../../../Shared/Loader';
import FeedBackModal from '../../../Modal/FeedBackModal';


const FeedbackRatings = () => {

  const[isOpen,setIsOpen] = useState(false)
  const[data,setData] = useState()
  const closeModal = () => {

      setIsOpen(false)
  }
 
  const handleopen = ( data) =>{

     setData(data)
     setIsOpen(true)
  }

  const{user,loading} = useAuth()
  const {
      data: campdata = [],
      isLoading,refetch
    
    } = useQuery({
      queryKey: ['feedback',user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => await getFeedback(user?.email),
    })

    if(isLoading){
      return <Loader/>
    }

    console.log(campdata)



    return (
      <>
      
      <div className='over overflow-x-auto'>
      <div>
            <SectionTitle heading={'Feedback Ratings'} title={'Please Send Feedback'}></SectionTitle>
            </div>
      <Container>

        
      <div className="rounded-lg border border-gray-200">
  <div className=" rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right bg-[#1976D2]">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
             Camp Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Date & Time
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Location
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Camp Fee
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Confirmation
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Payment
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Action
          </th>
         
        </tr>
      </thead>
     
      <tbody className="divide-y divide-[#1976D2]">
        
      {
            campdata?.map(data => 
                
                <tr key={data?._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {data?.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900"> {data?.date}</td>
                
                <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                 {data?.location}
                    </td>
                    
                    <button>
                    <td className="whitespace-nowrap  font-medium  px-4 py-2 t text-gray-900 ">
                ${data.campfees}
                    </td>
                    </button>
                   
                    <td  className="whitespace-nowrap px-4 py-2 t  text-green-500">
                     {data?.status}
                    </td>
    
                   
                    <td  className="whitespace-nowrap px-4 py-2 t text-green-500 ">
                    {/* <BookingModal setIsOpen={setIsOpen} closeModal={closeModal} isOpen={isOpen} data={data}/> */}
                  
                   {data?.payment}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                   
                    
                    <button onClick={() => handleopen(data)}
      className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
       href="/download"
       >
        FeedBack
       </button>
                  
                    </td>
               
              </tr>   
               
                )

          
        }
                
      

      </tbody>
    </table>
  </div>

  <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
    <ol className="flex justify-end gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          1
        </a>
      </li>

      <li
        className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
      >
        2
      </li>

      <li>
        <a
          href="#"
          className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
</div>




      </Container>
      <FeedBackModal setIsOpen={setIsOpen} datas={data} closeModal={closeModal} isOpen={isOpen} />
      </div>
      </>
    );
};

export default FeedbackRatings;