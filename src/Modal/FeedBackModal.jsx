import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';

import { postFeedback } from '../API/Feedback/Feedback';


const FeedBackModal = ({ closeModal, isOpen, datas }) => {

    const {user} = useAuth()
    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
         

          const feedbackInfo = {
            name: user?.displayName,
            photo:user?.photoURL,
            feedback:data.feedback,
            rattng: parseInt(data.rating),
            campname : datas.campname,
            date:datas?.date }

        const campRes = await postFeedback(feedbackInfo);
        console.log(campRes)
        if(campRes.insertedId){
      
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user?.displayName} Thank Your Feedback.`,
                showConfirmButton: false,
                timer: 1500
              });

              console.log( 'with image url', campRes.data);
        }
        console.table(feedbackInfo)


        
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
                Please Send Feedback
                </Dialog.Title>
                <div className="  lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
         

         
        

   


          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          


            <div>
              <label className="sr-only" >Provide Rating</label>
              <input
                    {...register('rating', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="provide rating"
                type="tel"
                id="phone"
          
              />
               {errors.rating && <span className="text-red-600">fees is required</span>}
            </div>

            
           
          </div>

          <div>
            <label className="sr-only" >Type Your Feedback</label>

            <textarea
               {...register('feedback', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Type Your Feedback"
              rows="3"
              id="message"
            ></textarea>
             {errors.feedback && <span className="text-red-600">message is required</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
             Send FeedBack
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

export default FeedBackModal