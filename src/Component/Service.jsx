import React from 'react';
import SectionTitle from './../Shared/SectionTitle';
import img1 from '../assets/ambu.jpg'
import img2 from '../assets/book.png'
import img3 from '../assets/injection.png'
import pic1 from '../assets/doctor.png'
import pic2 from '../assets/happy.png'
import pic3 from '../assets/medi.png'
import pic4 from '../assets/win.png'
const Service = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
         <SectionTitle heading={'Our Service'} title={'Your Health, Our Priority'}/>


           <div className='grid lg:grid-cols-3 gap-8 grid-cols-1 px-5 '    data-aos="fade-up"
     data-aos-duration="3000">
            
            {/* card 1 */}
              <div>
                <div className='p-3 rounded-full flex  justify-center'><img src={img1} alt="" className=' w-[150px]  rounded-full' /></div>
                  <h1 className='text-center text-2xl font-semibold text-black'>Online Emergency</h1>
                  <p className='text-center font-medium'>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
              </div>


              {/* card 2 */}

              <div>
                <div className='p-3 rounded-full  pt-20 flex justify-center'><img src={img2} alt="" className=' w-[150px] h-[150px]  rounded-full' /></div>
                  <h1 className='text-center text-2xl font-semibold text-black'>Medication Service</h1>
                  <p className='text-center font-medium'>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
              </div>


              {/* card 3 */}

              <div>
                <div className='p-3 rounded-full flex justify-center'><img src={img3} alt="" className=' w-[150px] h-[150px]  rounded-full' /></div>
                  <h1 className='text-center text-2xl font-semibold text-black'>24hr Health Program</h1>
                  <p className='text-center font-medium'>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
              </div>
             

           </div>

           {/* our sevice list */}

           <div className='grid lg:grid-cols-4 grid-cols-2 justify-center gap-6 px-5 pb-10 pt-16' data-aos="fade-up"
     data-aos-duration="3000">

{/* 1 */}
           <div className="stat bg-[#FFFFFF] p-8 shadow-lg  rounded-lg">
     <div className='flex  justify-center pb-2'><img src={pic1} alt="" /></div>
    <div className="stat-value text-[#0CA2DA] text-center">500+</div>
    <div className="stat-desc text-black pt-3 font-semibold text-lg text-center">Doctors At Work</div>
  </div>

{/* 2 */}

<div className="stat bg-[#FFFFFF] p-8  shadow-lg rounded-lg">
     <div className='flex justify-center pb-2'><img src={pic2} alt="" /></div>
    <div className="stat-value text-[#0CA2DA] text-center">50000+</div>
    <div className="stat-desc text-black pt-3 font-semibold text-lg text-center">Happy Patients</div>
  </div>

  {/* 3 */}
  
  <div className="stat bg-[#FFFFFF] p-8 shadow-lg  rounded-lg">
     <div className='flex justify-center pb-2'><img src={pic3} alt="" /></div>
    <div className="stat-value text-[#0CA2DA] text-center">500+</div>
    <div className="stat-desc text-black pt-3 font-semibold text-lg text-center">Medical Beds</div>
  </div>
  {/* 4 */}
  
  <div className="stat bg-[#FFFFFF] p-8 shadow-lg rounded-lg">
     <div className='flex justify-center pb-2'><img src={pic4} alt="" /></div>
    <div className="stat-value text-[#0CA2DA] text-center">300+</div>
    <div className="stat-desc text-black pt-3 font-semibold text-lg text-center">Winning Awards</div>
  </div>


           </div>
          
          
        </div>
    );
};

export default Service;