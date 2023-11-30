import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';
import useRole from '../Hook/userRole';
import { postUpcomingRegsiter } from '../API/UpcamingCamp/UpcamingCamp';
import { updateprofileOrgarole } from '../API/PorfileUpdate/OrganizerProfile';


const OrganizerUpdateModal = ({ closeModals, Open, info }) => {

    console.log(info?.data?.story )

    const {user} = useAuth()
    const[role] = useRole()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
         
        const Info = {
            name: data.name,
            phone:data?.phone,
            impact:data.adress,
            story:data.message,
            adress:data.adress,
            date:  new Date(),
            email: user?.user,
            role:role,
        }

        const res = await   updateprofileOrgarole(user?.email, Info);
        console.log(res)
        if(res.modifiedCount > 0){
      
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName} Update Sucessfuly.`,
                showConfirmButton: false,
                timer: 1500
              });

              console.log( 'with image url', campRes.data);
        }
        console.table(Info)


        
        }
  return (
    <Transition appear show={Open} as={Fragment}>
      <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModals}>
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
              Update Your Profile
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
              defaultValue={info?.data?.phone}
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
                defaultValue={info?.data?.adress}
              />
                {errors.adress && <span className="text-red-600">phone is required</span>}
            </div>

            <div>
  

  
</div>
          </div>

   


          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('message', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder=" organizer's impact,"
              rows="3"
              id="message"
              defaultValue={info?.data?.impact}
            ></textarea>
             {errors.message && <span className="text-red-600">message is required</span>}
          </div>



          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('message', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="success stories"
              rows="3"
              id="message"
              defaultValue={info?.data?.story}
            ></textarea>
             {errors.message && <span className="text-red-600">message is required</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
       Update Profile
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

export default OrganizerUpdateModal