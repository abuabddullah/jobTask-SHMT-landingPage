import React from 'react';
import AvailableDoctor from './AvailableDoctor';
import Nav from './Nav';
import AvailableAppoinments from './AvailableAppoinments';
const Home = () => {
    return (
        <div className='mainBoundary rounded-3xl shadow overflow-hidden'>
            <Nav />
            <AvailableDoctor />
            <AvailableAppoinments />
        </div>
    );
};

export default Home;