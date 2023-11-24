import React from 'react';
import Banner from '../../Component/Banner';
import PopularMedicalCamps from '../../Component/PopularMedicalCamps';
import Testimonials from '../../Component/Testimonials';
import WhoWeAre from '../../Component/WhoWeAre';

const Home = () => {
    return (
        <div >
            <Banner/>
            <PopularMedicalCamps/>
            <Testimonials/>
            <WhoWeAre/>
      
        </div>
    );
};

export default Home;