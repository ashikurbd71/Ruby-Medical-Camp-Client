import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';
import { postRegister } from '../API/Register/Register';
import useRole from '../Hook/userRole';
import { postUpcomingRegsiter } from '../API/UpcamingCamp/UpcamingCamp';
import axoissecure from '../Hook/Axoissecure';


const PartecipentUpcamingRegister = ({ closeModal, isOpen, item }) => {

    const {user} = useAuth()
    const[role] = useRole()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
        

          const upcamingcampInfo = {
            name: data.name,
            campname:item?.campname,
            phone : data.phone,
            campfees: parseInt(data.fees) ,
            gender:data.gender,
            adress:data.adress,
            meassge:data.message,
            email:user?.email,
            date:  new Date(),
            upcamingcampid:item?._id,
             role :role
      
        }

        const campRes = await postUpcomingRegsiter(upcamingcampInfo);
        console.log(campRes)
        if(campRes.insertedId){
      
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} Register Sucessfuly.`,
                showConfirmButton: false,
                timer: 1500
              });

              console.log( 'with image url', campRes.data);
        }
        console.table(upcamingcampInfo)

        const countRes = await  axoissecure.patch(`/upcamingpartecipent/id/${item?._id}`,{partecipent : 1},)
        console.log(countRes.data)
        
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
              <label className="sr-only" >Age</label>
              <input
               {...register('age', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Age"
                type="text"
                id="email"
              />
                {errors.age && <span className="text-red-600">age is required</span>}
            </div>

            <div>
  

  <select
    
    name="HeadlineAct"
    {...register('gender', { required: true })}
    id="HeadlineAct"
    className="w-full rounded-lg  p-3  border-gray-300 text-gray-700 sm:text-sm"
  >
     {errors.gender && <span className="text-red-600">gender is required</span>}
    <option value="Mela">Male</option>
    <option value="Fmela">Fmela</option>
    <option value="Others">Others</option>
   
  </select>
</div>
          </div>

   


          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <div>
              <label className="sr-only" >Adress</label>
              <input
                  {...register('adress', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Adress"
                type="tel"
                id="phone"
              />
                   {errors.adress && <span className="text-red-600">adress is required</span>}
            </div>


            <div>
              <label className="sr-only" >Camp Fees</label>
              <input
                    {...register('fees', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Camp Fees"
                type="tel"
                id="phone"
                defaultValue={item?.fees}
              />
               {errors.fees && <span className="text-red-600">fees is required</span>}
            </div>

            
           
          </div>

          <div>
            <label className="sr-only" >Message</label>

            <textarea
               {...register('message', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="health-related information"
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
            Register
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

export default PartecipentUpcamingRegister