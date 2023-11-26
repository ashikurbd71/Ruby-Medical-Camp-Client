import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { deleteCampdata, getCampdata } from '../../../API/CampsData/addCamp';
import useAuth from '../../../Hook/useAuth';
import Container from '../../../Shared/Container';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../../Shared/Loader';


const ManagesCamp = () => {


  const{user,loading} = useAuth()
    const {
        data: campdata = [],
        isLoading,refetch
      
      } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => await getCampdata(user?.email),
      })

      if(isLoading){
        return <Loader/>
      }
      console.log(campdata)

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
                const res = await deleteCampdata(_id);
                console.log(res);
                if (res.deletedCount > 0) {
                   

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${campdata?.campname} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    refetch()
                }


            }
        });


     }

    return (
   <>
        <Helmet>
        <title>R M C || ManagesCamps</title>
        
    </Helmet>
        <div>
            <SectionTitle heading={'Manages Camps'} title={'Update & Cancel Camp'}/>
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
            Service
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Healthcare
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Location
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Date
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Fee
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Update
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Cancel
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
                <td className="whitespace-nowrap px-4 py-2 text-gray-900"> {data?.services}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                {data?.professional}
                </td>
                <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
              {data?.location}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
              {data?.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
             ${data?.fees}
                    </td>
                    <td  className="whitespace-nowrap px-4 py-2 t text-gray-900">
           
             <Link to={`/dashboard/update-camp/${data?._id}`}>
             <FaEdit className='text-2xl text-green-500'/>
             </Link>
                    </td>

                    
                    <td className="whitespace-nowrap px-4 py-2 t text-gray-900">
                   <button onClick={() => handledelte(data?._id)}> <FaTrashAlt className='text-2xl text-red-500'/></button>
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
   </>
    );
};

export default ManagesCamp;