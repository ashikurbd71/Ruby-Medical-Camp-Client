import React from 'react';
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowAltCircleRight, FaBars } from "react-icons/fa";
import logo from '../assets/logo.png'
import useAuth from '../Hook/useAuth';
import toast from 'react-hot-toast';
const Navber = () => {


    const [showMenu, setShowMenu] = useState(false);
    
    const navitem = [
        {
            navMenu: 'Home',
            link: '/'
        },
        {
            navMenu: 'Dashboard',
            link: '/dashboard'
        },
        {
            navMenu: ' Avalible Camps',
            link: '/avaliblecamps'
        },
        {
            navMenu: ' Contact Us',
            link: '/contactus'
        },
        
      
    ]

  const{user,logOut} = useAuth()


  const handlelogout = () => {

    logOut()
    .then(res => { console.log(res)
        toast.success('Logout Successfuly')
    })
 }

    return (
        <div>

            {/* navber-1 */}
            <div className='lg:px-24 hidden lg:block py-4 h-[60px]  w-full bg-gradient-to-r from-[#1934AC] to-[#08C1E7]'>

                      <div className='flex justify-between '>

                        <div className='flex justify-center gap-4'>
                          <div className='flex gap-2 text-white items-center'>
                          <CgMail className='text-2xl' />
                          <h1 className='text-[16px] font-semibold'>inforubymedical@gmail.com</h1>
                          </div>

                     
                     
                          <div className='flex gap-2 text-white items-center'>
                          <CiPhone className='text-2xl' />
                          <h1 className='text-[16px] font-semibold'>+880-1581782193</h1>
                          </div>
                        

                        </div>

                        <div>

                         <div className='flex items-center gap-4  text-2xl'>

                            <div className='rou rounded-full bg-white p-1'>
                            <CiFacebook />
                            </div>
                            <div className='rou rounded-full bg-white p-1'>
                            <CiLinkedin />
                            </div>
                            <div className='rou rounded-full bg-white p-1'>
                            <CiTwitter />
                            </div>
                            <div className='rou rounded-full bg-white p-1'>
                            <CiInstagram />
                            </div>

                         </div>
                        </div>

                      </div>
            </div>


            {/* navber-2 */}
            <div className=''>

            </div>
            <div className='lg:px-24 py-3   bg-[#08C1E7]  lg:bg-[#EDF2F4] w-full text-gray-800'>
            <div className='block lg:flex justify-between items-center space-y-3 '>
                <div className='flex justify-between'>
                
                  <Link to={'/'}>
                  <div className='flex lg:ml-0 ml-3 items-center gap-1'>
                    <img src={logo} alt="" className='w-[28px]' />
                    <h1 className='text-lg font-bold'>RUBY MEDICAL CAMP</h1>
                </div>
                  </Link>

                    <h1 onClick={()=> setShowMenu(!showMenu)} className='text-xl font-bold px-4 block lg:hidden cursor-pointer'><FaBars/></h1>
                </div>
                <div className='hidden list-none text-lg font-semibold lg:flex justify-center items-center gap-10'>
                    {
                        navitem?.map(item =>
                            <li key={item?.id}>
                         

                                <NavLink
    to={item.link}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#08C1E7]" : ""
  }
>
{item.navMenu}
</NavLink>
                            </li>
                        )
                    }
              
                     {

                        user? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                          
                          <li className="text-xl font-semibold"><h1>{user?.displayName}</h1></li>
                          <li className="text-xl font-semibold"><h1>{user?.email}</h1></li>
                          <li  className="text-xl font-semibold"><button onClick={handlelogout}>Logout</button></li>
                           
                        
                        </ul>
                        </div> : 
                           <Link to={'/signin'} className=''>
                           <div className='flex ml-20 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7]  text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Login</h1>
                               <FaArrowAltCircleRight/>
                           </div>
                       </Link>
                     }
                 
                </div>
                <div className={`absolute px-4 text-lg font-semibold lg:hidden duration-700 top-10 list-none text-white space-y-5 w-full bg-[#092635] py-6 ${showMenu? 'left-0':'left-[-100%]'}`}>
                    {
                        navitem?.map(item =>
                            <li key={item?.id}>
                         

                                <NavLink
    to={item.link}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#08C1E7]" : ""
  }
>
{item.navMenu}
</NavLink>
                            </li>
                        )
                    }
                    {

user? <div className="dropdown dropdown-start">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</label>
<ul tabIndex={0} className="mt-3 z-[1] text-black p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  
  <li className="text-xl font-semibold"><h1>{user?.displayName}</h1></li>
  <li className="text-xl font-semibold"><h1>{user?.email}</h1></li>
  <li className="text-xl font-semibold"><button onClick={handlelogout} >Logout</button></li>
   

</ul>
</div> : 
   <Link to={'/signin'} className=''>
   <div className='flex ml-20 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7]  text-black px-6 py-2 rounded-full font-semibold'>
       <h1>Login</h1>
       <FaArrowAltCircleRight/>
   </div>
</Link>
}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navber;