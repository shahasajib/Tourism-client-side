import React from 'react';
import About from '../../About/About';
import ClientComment from '../../Client Comment/ClientComment';
import Banner from '../Banner/Banner';
import TourPackages from '../Tour Packages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <br />
            <p>Why Traveller Point</p>
            <About></About>
            <br />
            <p>Our Traveller Say</p>
            <ClientComment></ClientComment>
        </div>
    );
};

export default Home;