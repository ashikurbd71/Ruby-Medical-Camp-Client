import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';




import { postHealthcaredata } from '../API/userData';
import useAuth from '../Hook/useAuth';
import useRole from '../Hook/userRole';


const PartecipentProfileModal = ({ closeModalss, Opens,refetch}) => {

    const {user} = useAuth()
    const[role] = useRole()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
         

          const Info = {
          
            phone:data?.phone,
            preferences :data.preferences ,
            Interests :data.interests ,
            adress:data.adress,
            date:  new Date(),
            email: user?.user,
            role:role,
        }

        const campRes = await postHealthcaredata(user?.email,Info);
        console.log(campRes)
        if(campRes.insertedId){
      
            reset();
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} Register Sucessfuly.`,
                showConfirmButton: false,
                timer: 1500
              });

              console.log( 'with image url', campRes.data);
        }
        console.table(Info)


        
        }
  return (
    <Transition appear show={Opens} as={Fragment}>
      <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModalss}>
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
               Create Your Profile
                </Dialog.Title>
                <div className="  lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
          <div>
            <label className="sr-only" >phone</label>
            <input
             {...register('phone', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Phone"
              type="text"
              id="name"
            />
             {errors.phone && <span className="text-red-600">name is required</span>}
          </div>

        

          <div className=" gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Adress</label>
              <input
               {...register('adress', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="adress"
                type="text"
                id="email"
              />
                {errors.adress && <span className="text-red-600">phone is required</span>}
            </div>

            <div>
  

  
</div>
          </div>

   


          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('preferences', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder=" personal preferences,"
              rows="3"
              id="message"
            ></textarea>
             {errors.preferences && <span className="text-red-600">message is required</span>}
          </div>



          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('interests', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Interests in specific medical areas"
              rows="3"
              id="message"
            ></textarea>
             {errors.interests && <span className="text-red-600">message is required</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
          Create Profile
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

export default PartecipentProfileModal