import React, { useEffect, useState } from 'react';
import { Container ,Grid,Box} from '@mui/material'
import SectionTitle from '../Shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay} from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

import img from "../assets/test-1.jpg"
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoispublic from './../Hook/AxoissecurePublic';
const Testimonials = () => {

  const { user, loading } = useAuth()

  console.log(user?.email)
 const { data: feeback, isLoading } = useQuery({
   
  //  enabled: !loading && !!user?.email,
   queryFn: async () => await axoispublic('/feedback-camp'),
   queryKey: ['feedback'],
   
 })

 console.log()






    return (

        <>
        <SectionTitle title={' A Journey of Growth and Discovery'} heading={'Testimonials'}>

        </SectionTitle>
        <Container maxWidth='lg'>

            
        <Box  data-aos="fade-up"
     data-aos-duration="3000" sx={{my:10}}>

        <Swiper navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
        
      


        {
  
  
  feeback?.data?.map(data => <SwiperSlide key={data._id}>
  
  
   <div className='flex  flex-col justify-center ite items-center space-y-3 mx-14 lg:mx-28'>
 
    <img src={data.photo} alt="" className='rounded-full h-[100px] w-[100px]' />
     
     <h1 className='font-bold text-lg'>{data?.name}</h1>
    <Rating
        style={{ maxWidth: 120 }}
        value={data?.rattng}
        readOnly
      />
   
    <p className='text-[#CD9003] lg:text-[25px] text-2xl font-semibold'>{data?.campname}</p>
     
    

      <h1 className='text-[#444] font-medium text-lg  lg:text-[20px]'>{data?.feedback}</h1>
      <h1 className='text-[#444] font-medium text-lg  lg:text-[20px]'>{data?.date}</h1>
   </div>
  
      
      </SwiperSlide>
      
      )
  
  
  
        }
  
  </Swiper>

        </Box>


        </Container>
        </>
    );
};

export default Testimonials;