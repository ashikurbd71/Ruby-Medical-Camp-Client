

import { Helmet } from 'react-helmet'
import useAuth from '../Hook/useAuth'
import useRole from '../Hook/userRole'
import img from '../assets/profile.jpg'
const Profile = () => {
  const { user,logOut } = useAuth()
  const [role] = useRole()
  console.log(user)

  const handlelogout =() => {

    logOut()
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Dashboard || Profile</title>
      </Helmet>
      <div className='bg-[#dad7cd] shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src={img}
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-[#1976D2] rounded-full'>
            {role && role.toUpperCase()}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user.email}</span>
              </p>

              <div className='flex flex-col gap-3'>
                <button className='bg-[#1976D2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#1976D2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2]'>
                  Change Password
                
                </button>
                <button onClick={handlelogout} className='bg-[#1976D2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1976D2]'>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile