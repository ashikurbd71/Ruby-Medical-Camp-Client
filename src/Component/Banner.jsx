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
          <div className='absolute text-2xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>The number of people who attended the campaign or actively participated in its activities can be a crucial indicator. A higher turnout may signify greater community engagement</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl  font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'> If the campaign included health screenings or medical services, success can be measured by the number of individuals who received these services and any positive health outcomes identified.</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl  font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'> If one of the goals was to raise awareness or educate the community about specific health issues, success can be determined by assessing the level of understanding and knowledge among the target audience</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl  font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Gathering feedback from participants, volunteers, and stakeholders can provide valuable insights into the perceived success of the campaign. Positive testimonials and constructive feedback can be indicative of a well-received event.</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl  font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Success can also be measured by the campaign's ability to achieve long-term impact. For example, if the campaign focused on preventive care, success could be assessed by tracking improvements in health behaviors over time.</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl  font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'> If the campaign received positive media coverage and generated public interest, it may indicate success in reaching and resonating with the broader community</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner