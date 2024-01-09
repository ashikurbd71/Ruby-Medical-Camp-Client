import React from 'react';
import Banner from '../../Component/Banner';
import PopularMedicalCamps from '../../Component/PopularMedicalCamps';
import Testimonials from '../../Component/Testimonials';
import WhoWeAre from '../../Component/WhoWeAre';
import WhyChooseUs from '../../Component/WhyChooseUs';
import UpcomingCamp from '../../Component/UpcomingCamp';
import { Helmet } from 'react-helmet';
import Service from '../../Component/Service';
import OurDepartmrnt from '../../Component/OurDepartmrnt';

const Home = () => {
    return (
        <div >
            <Helmet>
        <title>R M C || Home</title>
        
    </Helmet>
            <Banner/>
            <PopularMedicalCamps/>
            <WhoWeAre/>
          <WhyChooseUs/>
          <Service/>
          <OurDepartmrnt/>
         <UpcomingCamp/>
         
        <Testimonials/>
        </div>
    );
};

export default Home;