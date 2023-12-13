import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { Helmet } from 'react-helmet';
import Container from '../../../Shared/Container';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hook/useAuth';
import axoissecure from '../../../Hook/Axoissecure';
import Loader from '../../../Shared/Loader';
import Swal from 'sweetalert2';
import { deleteStatus, updatePaid, updateStatus } from '../../../API/Register/Register';
import { deleteCampdata } from '../../../API/CampsData/addCamp';

const ManagesRegister = () => {

  const{user,loading} = useAuth()
  const {
      data: campdata = [],
      isLoading,refetch
    
    } = useQuery({
      queryKey: ['register'],
      enabled: !loading,
      queryFn: async () => await axoissecure.get(`/register-camp/email/${user?.email}`),
    })

    if(isLoading){
      return <Loader/>
    }

      console.log(campdata?.data)

      // delete-------------------------------------------------

      const handledelte = (_id) => {

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
          if (result.isConfirmed) {
              const res = await deleteStatus(_id);
              console.log(res);
              if (res.deletedCount > 0) {
                 

                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `your request has been deleted`,
                      showConfirmButton: false,
                      timer: 1500
                  });

                  refetch()
              }


          }
      });


      }

      //--------------------------- updateeeee




      const handlestatus = async(_id) => {

        console.log(_id)
        const res = await updateStatus(_id)
        console.log(res)
      

            console.log(res.data)

            if(res.modifiedCount > 0){
              refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:'Confrim Request',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
      

      }


      const handlespaid = async(_id) => {

      const res = await  updatePaid(_id)

      console.log(res.data)

      if(res.modifiedCount > 0){
        refetch()
          Swal.fire({
              position: "top-end",
              icon: "success",
              title:'Paid Confrim',
              showConfirmButton: false,
              timer: 1500
            });
      }
      }


    return (
<>
<div className=''>
<Helmet>
        <title>R M C || ManagesRegister</title>
        
    </Helmet>
        <div>
            <SectionTitle heading={'Manages Register'} title={'All Register User'}/>
        </div>

        <Container>
        <div className="rounded-lg border border-gray-200">
  <div className=" rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right bg-[#1976D2]">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
             Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Phone
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gender
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Adress
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Problem
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Status
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            fees
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          payment
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Cancel
          </th>
        </tr>
      </thead>
     
      <tbody className="divide-y divide-[#1976D2]">
        
      {
            campdata?.data?.map(data => 
                
                <tr key={data?._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {data?.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900"> {data?.phone}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                {data?.gender}
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                 {data?.adress}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                  {data?.meassge}
                    </td>
                    <button>
                    <td className="whitespace-nowrap  font-medium  px-4 py-2 t text-green-500 ">
                  {data?.status === 'Confrimed' ? 'Confrimed' : <button onClick={() => handlestatus(data?._id)} className='text-red-700'> Padding</button>}
                    </td>
                    </button>
                   
                    <td  className="whitespace-nowrap px-4 py-2 t text-gray-900">
                     ${data?.campfees}
                    </td>

                    <td  className="whitespace-nowrap px-4 py-2 t text-green-500 ">
                     {data?.payment === 'paid' ? 'paid' : <h1 className='text-red-500'> Uppaid</h1> }
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">

                      {/* to: conditional button base paid unpaid */}
                  {
                     data?.payment === 'unpaid'? "" : <button onClick={() => handledelte(data?._id)}> <FaTrashAlt className='text-2xl text-red-500'/></button>
                  }
                   
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

        </div>
</>
    );
};

export default ManagesRegister;