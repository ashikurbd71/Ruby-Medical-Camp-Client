import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/banner-1 (1).jpg'
import img2 from '../assets/banner-2 (1).jpg'
import img3 from '../assets/banner-3 (1).jpg'
import img4 from '../assets/banner-4 (1).jpg'
import img5 from '../assets/banner-5 (1).jpg'
import img6 from '../assets/banner-6 (1).jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="h-screen bg-green-500">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className='w-full h-screen' />
            <div className='absolute  top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  '>
               <h1 className='lg:text-6xl text-2xl font-bold text-[#fff]'>Get Better Care For <br /> Your <span className='text-[#0CA2DA]'>Health</span></h1>
               <p className='text-lg font-normal pt-5 text-gray-200'>Empowerment through Compassionate Care: Join Us for a Transformative Medical Camp Experience, Fostering Wellness, Unity, and Lifelong Health for All</p>
      
               <div className='flex 0 items-center gap-2 bg-gradient-to-r from-[#1934AC] to-[#08C1E7] w-[180px] mt-5 text-black px-6 py-2 rounded-full font-semibold'>
                               <h1>Explorer Camp</h1>
                               <FaArrowAltCircleRight/>
                           </div>
            </div>
          
          <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner