import React from 'react';
import Banner from '../../Component/Banner';
import PopularMedicalCamps from '../../Component/PopularMedicalCamps';
import Testimonials from '../../Component/Testimonials';
import WhoWeAre from '../../Component/WhoWeAre';
import WhyChooseUs from '../../Component/WhyChooseUs';
import UpcomingCamp from '../../Component/UpcomingCamp';
import { Helmet } from 'react-helmet';

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
         <UpcomingCamp/>
        <Testimonials/>
        </div>
    );
};

export default Home;