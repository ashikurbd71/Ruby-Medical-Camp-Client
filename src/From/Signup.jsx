import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios';

// import { getToken, saveuser } from '../../API/Userdata';

import { GiSpinalCoil } from "react-icons/gi"
import useAuth from '../Hook/useAuth';
import toast from 'react-hot-toast';
import { getToken, postuser } from '../API/userData';


const SignUp = () => {
  const navigate = useNavigate()

  

  const{createUser,updateUserProfile,loading,signInWithGoogle,logOut}=useAuth()
   const handlesubmit = async(event) => {

    event.preventDefault()
    const from = event.target
    const role = from?.role.value || 'participant'
    const name = from?.name.value
    const password = from?.password.value
    const email = from?.email.value
    const image = from?.image.files[0]
   
    try{
// photo upload
      const fromdata = new FormData()
      fromdata.append('image',image)
  
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,fromdata)
  
      console.log(data)
      console.log(name,password)
  
      // create user

     const result = await createUser(email,password)
      

    //  update profile
     await updateUserProfile(name, data?.data?.display_url)

     console.log(result)

    //  save databages

  const dbresult = await postuser(result?.user,role)
   console.log(dbresult)

    // create token

   await getToken(result?.user?.email)
   
   
    toast.success('sucessfuly signup')
    navigate(location?.state ? location?.state : '/')
    }

    catch(err){

      toast.error(err?.message)
      console.log(err)
    }

   }

  

   const googlesignin = async() => {

    try{
      

      
      // google sihn

      const result = await signInWithGoogle()
      console.log(result)

          //  save databages
      
        const dbresult = await postuser(result?.user)
         console.log(dbresult)
      
          // create token
      
         await getToken(result?.user?.email)
          toast.success('sucessfuly signup')

          navigate(location?.state ? location?.state : '/')

      
          }
      
          catch(err){
      
            toast.error(err?.message)
            console.log(err)
          }
      



   }


  return (
    <div className='flex justify-center items-center my-28 min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#f8f9fa] text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-[#1976D2]'>Register</h1>
          <p className='text-sm text-gray-400'>Welcome to Ruby Medical Camps</p>
        </div>
        <form
          noValidate=''
          onSubmit={handlesubmit}
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1976D2] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1976D2] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <label className='block mb-2 text-sm'>
    Select Role
  </label>

  <select
    name="role"
    id="HeadlineAct"
    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1976D2] bg-gray-200 text-gray-900'
  >
     <option value="participants">Participants</option>
    <option value="organizer">Organizers</option>
    <option value="professionals">Professionals</option>
   
  </select>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1976D2] bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#1976D2] w-full rounded-md py-3 text-white'
            >
             {
              loading? <GiSpinalCoil className=' animate-spin mx-auto text-2xl'/> : ' Continue'
             }
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={googlesignin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
