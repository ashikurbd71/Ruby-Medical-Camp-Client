import { Button } from '@mui/material';
import React from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/contact.jpg'
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    return (

        <>

<Helmet>
        <title>R M C || Contact Us</title>
        
    </Helmet>

<div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px] my-16 bg-fixed lg:mb-40' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      
        <div className='text-center lg:pt-44 pt-20 md:pt-20'>

         <h1 className='lg:text-5xl font-bold text-[#1976D2]  text-2xl'>Contact</h1>
         <div className=' flex justify-center lg:pb-0 pb-5'>
         <p className='text-[#fff] w-[60%] text-xl font-medium py-4'>Join us for a transformative healthcare experience at our upcoming medical camp! Dedicated to community well-being, our camp offers free health check-ups, consultations with experienced medical professionals, and informative sessions on preventive care. From basic screenings to personalized advice, we are committed to enhancing your health and promoting a healthier community. Don't miss this opportunity to prioritize your well-being</p>
         </div>
        </div>
    

</div>
        <Container>
        <div className='flex justify-between lg:flex-row md:flex-row  items-center flex-col-reverse my-20'>


            <div className='flex-1 mt-8'>
                <div className='text-center'>
                  <h1 className='text-2xl mb-2 font-bold text-[#1976D2]'>Ruby General Hospital</h1>
                  <p className='text-lg mb-2 font-medium'>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                  <p className='text-lg mb-2 font-medium'>Support: web@rubymedi-camp.com</p>
                  <p className='text-lg mb-2 font-medium'>Helpline: 01322810882 , 01322901105</p>
                
                </div>
            </div>

            <div className='flex-1'>
            <form className="mt-8 space-y-6" action="#">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         Subject
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Subject"
          required
        />
      </div>
      <div>
      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  
      </div>
      <div className="flex items-start">
       
        
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Message</button>
      
        
      </div>
    
      
    </form>
            </div>
       
        </div>
        </Container>
        </>
    );
};

export default ContactUs;