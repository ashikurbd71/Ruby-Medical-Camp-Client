import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import Container from '../../../Shared/Container';
import useAuth from '../../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Shared/Loader';
import { getPaymnet } from '../../../API/Payment/Payment';

const PaymentHistory = () => {

  const{user,loading} = useAuth()
  const {
      data: campdata = [],
      isLoading,refetch
    
    } = useQuery({
      queryKey: ['register'],
      enabled: !loading,
      queryFn: async () => await getPaymnet(user?.email),
    })

    if(isLoading){
      return <Loader/>
    }

      console.log(campdata)


    return (
       
        <>
        
        <div>
           
            <SectionTitle heading={'Payment History'} title={'Your Payment Status'}></SectionTitle>
        </div>

        <Container>

<div className="rounded-lg border border-gray-200">
  <div className="overflow-x-auto rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right bg-[#1976D2]">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
             Camp Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Date
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          location
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Camp Fee
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Paymnet Status
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Confrim Status
          </th>
         
        </tr>
      </thead>
     
      <tbody className="divide-y divide-[#1976D2]">
        
      {
            campdata?.map(data => 
                
                <tr key={data?._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {data?.campname}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900"> {data?.date}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                {data?.location}
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                 ${data?.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                  {data?.status}
                    </td>
                    <button>
                    <td className="whitespace-nowrap  font-medium  px-4 py-2 t text-green-500 ">
                 { data?.status === 'Comfrimed' ? 'Comfrimed' : <h1 className='text-red-600'>Pendding</h1> }
                    </td>
                    </button>
                   
                  

                   
                    
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
        
        </>
    );
};

export default PaymentHistory;