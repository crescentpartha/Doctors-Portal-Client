import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;