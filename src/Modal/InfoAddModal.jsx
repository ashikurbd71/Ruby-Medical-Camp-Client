import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';
import { postRegister } from '../API/Register/Register';
import axios from 'axios';
import { postHealthcaredata } from '../API/userData';


const InfoAddModal = ({ closeModal, isOpen, refetch }) => {

  

    const {user} = useAuth()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
        const imagefile = {image : data?.image[0]}
  
        console.table(imagefile)
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,imagefile,{
          
        headers: {
            'content-type': 'multipart/form-data'
        }
        })

         
        if (res.data.success) {


          const profileinfo = {
            name: data.name,
            phone:data?.phone,
            emailid:data?.email,
            email:user?.email,
            location : data.loaction,
             userimg:user?.photoURL,
             specialty:data.specialty,
            certimg:res.data.data.image,
                       
        }

     
          try {
            const campRes = await postHealthcaredata(user?.email, profileinfo);
            console.log('Database response:', campRes);

            refetch()
            if(campRes.insertedId){
        
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user?.displayName} Add Info Sucessfuly.`,
                  showConfirmButton: false,
                  timer: 1500
                });
  
                console.log( 'with image url', campRes.data);
          }
            // Continue with the rest of your code
          } catch (error) {
            console.error('Error:', error);
            // Handle the error if needed
          }
    
       
      

        }



        


        
        }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-[#EDF2F4] bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-[#EDF2F4] mt-20 p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-xl font-medium text-center leading-6 text-[#1976D2]'
                >
                 Fill Your Information
                </Dialog.Title>
                <div className="  lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
          <div>
            <label className="sr-only" >Name</label>
            <input
             {...register('name', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
             {errors.name && <span className="text-red-600">name is required</span>}
          </div>

          <div>
              <label className="sr-only" >Phone</label>
              <input
               {...register('phone', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
                  {errors.phone && <span className="text-red-600">phone is required</span>}
            </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Email</label>
              <input
               {...register('email', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="email"
                id="email"
              />
                {errors.age && <span className="text-red-600">age is required</span>}
            </div>

            <div>

            <label className="sr-only" >location</label>
              <input
               {...register('location', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="location"
                type="text"
                id="email"
              />
                {errors.age && <span className="text-red-600">age is required</span>}
            </div>

            <div>
  

  <select
    
    name="HeadlineAct"
    {...register('specialty', { required: true })}
    id="HeadlineAct"
    className="w-full rounded-lg  p-3  border-gray-300 text-gray-700 sm:text-sm"
  >
     {errors. specialty && <span className="text-red-600">gender is required</span>}
    <option value="Cardiology">Cardiology</option>
    <option value="Orthopedics">Orthopedics</option>
    <option value="Neurology">Neurology</option>
   
  </select>
</div>


<div className=' p-2 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-2 py-2 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-full text-center'>
                  <label>
                    <input
                    // onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-20 hidden'
                      type='file'
                      {...register('image', { required: true })}
                     
                      id='image'
                      accept='image/*'
                      hidden
                    />
                       {errors.image && <span className="text-red-600">image is required</span>}
                    <div className='bg-[#1976D2] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-2 hover:bg-[#1976D2]'>
                    certifications
                    </div>
                  </label>
                </div>
              </div>
            </div>



          </div>

   


          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          


            

            
           
          </div>

         

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
             Add Info
            </button>
          </div>
        </form>
      </div>
               
            
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default InfoAddModal