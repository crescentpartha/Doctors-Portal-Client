import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
        </div>
    );
};

export default Home;