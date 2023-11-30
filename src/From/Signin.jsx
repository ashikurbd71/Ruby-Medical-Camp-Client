import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

// import { getToken, saveuser } from '../../API/Userdata'

import { GiSpinalCoil } from "react-icons/gi"
import useAuth from '../Hook/useAuth'
import { getToken, postuser } from '../API/userData'
import useRole from '../Hook/userRole'
import toast from 'react-hot-toast'


const Signin = () => {

  const[role] = useRole()
  
  const location = useLocation()
  const navigate = useNavigate()
  const{signIn,loading,signInWithGoogle,}=useAuth()
   const handlesubmit = async(event) => {

    event.preventDefault()
    const from = event.target
    const password = from?.password.value
    const email = from?.email.value

   
    try{

    
  
      // create user

     const result = await signIn(email,password)
      console.log(result)
    //  save databages

  const dbresult = await postuser(result?.user,role)
   console.log(dbresult)

    // create token

    getToken(result?.user?.email)
  
   .then(res => {console.log(res.user)
    toast.success('sucessfuly signup')
    navigate(location?.state ? location?.state : '/dashboard')
 
     
  })
  .catch((error) => {
      console.log(error)
     // ..
   });



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
      
        const dbresult = await postuser(result?.user,role)
         console.log(dbresult)
      
          // create token
      
         getToken(result?.user?.email)
         .then(res => {console.log(res.user)
        
          navigate(location?.state ? location?.state : '/dashboard')
          
           return toast.success('sucessfuly signup')
        })
        .catch((error) => {
            console.log(error)
           // ..
         });
          }
      
          catch(err){
      
            toast.error(err?.message)
            console.log(err)
          }
      



   }



  return (
    <div className='flex justify-center items-center my-28 min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-[#1976D2]'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
        onSubmit={handlesubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
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
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
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
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-[#1976D2] text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        {/* <div onClick={googlesignin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div> */}
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-[#1976D2] text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Signin
