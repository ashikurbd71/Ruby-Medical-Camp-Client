import { Button } from '@mui/material';
import React from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/contact.jpg'
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {

  
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ufuile7', 'template_619stvq', form.current, 't24f2NMOEqSuvH5pl')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Thanks For Contact",
            text: "Wating For Your Feedback",
            icon: "success"
          });
      }, (error) => {
          console.log(error.text);
      });
  };

    return (

        <>

<Helmet>
        <title>R M C || Contact Us</title>
        
    </Helmet>

<div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px]  bg-fixed lg:mb-40' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      
        <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='text-center lg:pt-44 pt-20 md:pt-20'>

         <h1 className='lg:text-5xl font-bold text-[#1976D2]  text-2xl'>Contact</h1>
         <div className=' flex justify-center lg:pb-0 pb-5'>
         <p className='text-[#fff] lg:w-[60%] lg:text-xl font-medium py-4'>Join us for a transformative healthcare experience at our upcoming medical camp! Dedicated to community well-being, our camp offers free health check-ups, consultations with experienced medical professionals, and informative sessions on preventive care. From basic screenings to personalized advice, we are committed to enhancing your health and promoting a healthier community. Don't miss this opportunity to prioritize your well-being</p>
         </div>
        </div>
    

</div>
        <Container>
        <div className='flex justify-between lg:flex-row md:flex-row  items-center flex-col-reverse my-20'>


            <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='flex-1 mt-8'>
                <div className='text-center'>
                  <h1 className='text-2xl mb-2 font-bold text-[#1976D2]'>Ruby General Hospital</h1>
                  <p className='text-lg mb-2 font-medium'>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                  <p className='text-lg mb-2 font-medium'>Support: web@rubymedi-camp.com</p>
                  <p className='text-lg mb-2 font-medium'>Helpline: 01322810882 , 01322901105</p>
                
                </div>
            </div>

            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex-1'>
<form className="mt-8 space-y-6" ref={form} onSubmit={sendEmail}>
<div >
<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#1976D2] dark:text-white">
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
<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#1976D2] dark:text-white">
Subject
</label>
<input

// type="email"
name="name"
id="sub"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="Subject"
required
/>
</div>
<div>
<label for="message" className="block mb-2 text-sm font-medium text-[#1976D2] dark:text-white">Your message</label>
<textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

</div>
<div className="flex items-start">


<button type="submit" value="Send" className="btn py-2 rounded font-semibold px-2 bg-[#1976D2]">Send Message</button>

 
</div>


</form>
            </div>
       
        </div>
        </Container>
        </>
    );
};

export default ContactUs;