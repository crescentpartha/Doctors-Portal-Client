import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Footer from '../Shared/Footer';
import HomeContact from './HomeContact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;