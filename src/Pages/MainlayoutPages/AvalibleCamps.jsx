import React from 'react';
import Container from '../../Shared/Container';
import bg from '../../assets/avalible.jpg'
const AvalibleCamps = () => {
    return (
        <>
        <div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px] my-16 bg-fixed lg:mb-40' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      
<div className='text-center lg:pt-44 pt-20 md:pt-20'>

 <h1 className='lg:text-5xl font-bold text-[#1976D2]  text-2xl'>Ruby Medical Camps</h1>
 <div className=' flex justify-center lg:pb-0 pb-5'>
 <p className='text-[#fff] w-[60%] text-xl font-medium py-4'>Welcome to Ruby Medical Camps, where health meets compassion! Our mission is to provide accessible healthcare to all, and our medical camps are designed to bring quality services directly to the community. Join us for a day of wellness, featuring free health check-ups, consultations with skilled healthcare professionals, and informative sessions on leading a healthy lifestyle</p>
 </div>
</div>



<div className="relative mx-20 py-8 ">
  <label for="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full  rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>


</div>
        <Container>

        

        </Container>
        </>
    );
};

export default AvalibleCamps;