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
const Testimonials = () => {

    const[datas,setData] = useState()
    useEffect(() => {
  
    
    fetch('Ratting.json')
    .then(res => res.json())
    .then(data => setData(data))
  
    },[])

    return (

        <>
        <SectionTitle title={' A Journey of Growth and Discovery'} heading={'Testimonials'}>

        </SectionTitle>
        <Container maxWidth='lg'>

            
        <Box sx={{my:10}}>

        <Swiper navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
        
      


        {
  
  
      datas?.map(data => <SwiperSlide key={data._id}>
  
  
   <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>
 
    <img src={img} alt="" className='rounded-full h-[100px] w-[150px]' />
    <p className='text-[#CD9003] lg:text-[25px] text-2xl font-semibold'>{data?.campName}</p>
     
    <Rating
        style={{ maxWidth: 180 }}
        value={data?.rating}
        readOnly
      />

      <h1 className='text-[#444] font-medium text-xl  lg:text-[20px]'>{data?.feedback}</h1>
      <h1 className='text-[#444] font-medium text-xl  lg:text-[20px]'>{data?.date}</h1>
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