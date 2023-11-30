import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';
import { postRegister } from '../API/Register/Register';
import useRole from '../Hook/userRole';
import { postUpcomingRegsiter } from '../API/UpcamingCamp/UpcamingCamp';
import axoissecure from '../Hook/Axoissecure';


const HealthcareRegisationModal = ({ closeModale, isOpene, item }) => {

    const {user} = useAuth()
    const[role] = useRole()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
         

          const upcamingcampInfo = {
            name: data.name,
            campname:item?.campname,
            phone : data.phone,
            adress:data.adress,
            meassge:data.message,
            date:  new Date(),
            role:role,
            status:'pendding',
            emailid:data.email,
            upcamingcampid:item?._id,
            email: user?.email
        }

        const campRes = await postUpcomingRegsiter(upcamingcampInfo);
        console.log(campRes)
        if(campRes.insertedId){
      
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.user?.displayName} Register Sucessfuly.`,
                showConfirmButton: false,
                timer: 1500
              });

              console.log( 'with image url', campRes.data);
        }
        console.table(upcamingcampInfo)

        const countRes = await  axoissecure.patch(`upcaminghealthcare-count/id/${item?._id}`,{healthcare : 1},)
        console.log(countRes.data)

        
        }
  return (
    <Transition appear show={isOpene} as={Fragment}>
      <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModale}>
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
                Join Camp Fill Up From
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
              <label className="sr-only" >Specialization</label>
              <input
               {...register('specialization', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Specialization"
                type="tel"
                id="phone"
              />
                  {errors.specialization && <span className="text-red-600">specialization is required</span>}
            </div>

          <div className=" gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >phone</label>
              <input
               {...register('phone', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="phone"
                type="text"
                id="email"
              />
                {errors.phone && <span className="text-red-600">phone is required</span>}
            </div>

            <div>
  

  
</div>
          </div>

   


          <div className=" text-center sm:grid-cols-2">
          <div>
              <label className="sr-only" >Email</label>
              <input
                  {...register('email', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="email"
                id="phone"
              />
                   {errors.email && <span className="text-red-600">email is required</span>}
            </div>


           
            
           
          </div>

          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('message', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Camp-Specific Information"
              rows="3"
              id="message"
            ></textarea>
             {errors.message && <span className="text-red-600">message is required</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
          Intersted
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

export default HealthcareRegisationModal