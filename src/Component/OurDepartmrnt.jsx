import React from 'react';
import SectionTitle from './../Shared/SectionTitle';
import img1 from '../assets/cap.png'
import img2 from '../assets/teet.png'
import img3 from '../assets/teet-1.png'
import banner from '../assets/ourdep banner.png'
const OurDepartmrnt = () => {
    return (
        <div className='max-w-[1170px] mx-auto px-5 lg:px-0 '>
            <SectionTitle heading={'Our Department'} title={"Our Department's Commitment" }/>

               <div className='flex justify-center py-10 gap-10 lg:flex-row flex-col-reverse items-center '>

                 <div className='flex  flex-col gap-7 ' >
                    
                    {/* card 1 */}
                    <div className='flex justify-cente gap-4 h-[150px] hover:text-white  hover:bg-gradient-to-r from-[#1934AC] to-[#08C1E7] rounded-lg px-5 shadow-lg w-full bg-[#FFFFFF]  items-center'>
                       
                       <div className='bg-[#ffff] rounded-full p-7 shadow-lg'>
                       <img src={img1} alt="" />
                       </div>
 
                       <div>
                         <h1 className='lg:text-2xl text-lg font-semibold '>Pedlatric</h1>
                         <p className='fon font-normal  lg:text-lg '>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.
 </p>
                       </div>
 
                      </div>

{/* card 2 */}
<div className='flex justify-cente gap-4 h-[150px] hover:text-white  hover:bg-gradient-to-r from-[#1934AC] to-[#08C1E7] rounded-lg px-5 shadow-lg w-full bg-[#FFFFFF]  items-center'>
                       
                       <div className='bg-[#ffff] rounded-full p-7 shadow-lg'>
                       <img src={img2} alt="" />
                       </div>
 
                       <div>
                         <h1 className='lg:text-2xl text-lg font-semibold '>Dental</h1>
                         <p className='fon font-normal  lg:text-lg '>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.
 </p>
                       </div>
 
                      </div>

{/* card 3 */}
<div className='flex justify-cente gap-4 h-[150px] hover:text-white  hover:bg-gradient-to-r from-[#1934AC] to-[#08C1E7] rounded-lg px-5 shadow-lg w-full bg-[#FFFFFF]  items-center'>
                       
                       <div className='bg-[#ffff] rounded-full p-7 shadow-lg'>
                       <img src={img3} alt="" />
                       </div>
 
                       <div>
                         <h1 className='lg:text-2xl text-lg font-semibold '>Physicians</h1>
                         <p className='fon font-normal lg:text-lg '>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.
 </p>
                       </div>
 
                      </div>

                 </div>

                 {/* image */}

                 <div>
                    <img src={banner} alt=""  className='h-[500px] w-full'/>
                 </div>
               </div>
        </div>


    );
};

export default OurDepartmrnt;