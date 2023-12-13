import React from 'react';
import logo from '../assets/logo.png'
import { Link,NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
           

<footer className="bg-[#1976D2] shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
           <Link to={'/'}>
            <button href="#" className="flex items-center mb-4 sm:mb-0  rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-[#fff] dark:text-white">Ruby Medical Camps</span>
            </button>
           </Link>
            <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-[#fff] sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to={'/'}>
                    <button href="#" className="hover:underline me-4 md:me-6">Home</button>
                    </Link>
                </li>
                <li>
                <Link to={'/dashboard'}>
                    <button href="#" className="hover:underline me-4 md:me-6">DashBoard</button>
                    </Link>
                </li>
                <li>
                <Link to={'/avaliblecamps'}>
                    <button href="#" className="hover:underline me-4 md:me-6">Avalible Camps</button>
                    </Link>
                </li>
                <li>
                <Link to={'/contactus'}>
                    <button href="#" className="hover:underline me-4 md:me-6">Contact Us</button>
                    </Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-[#fff] sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Ruby Medical Camps™</a>. All Rights Reserved.</span>
    </div>
</footer>

 
        </div>
    );
};

export default Footer;