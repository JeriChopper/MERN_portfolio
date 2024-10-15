// src/pages/Home.js

/**
 * Home page
 * 
 * This displays the root/home page which consists of the HomePage.js component
 * 
 * 
 * Styling inherited from Homepage.js
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
*/


import React from 'react';
import HomePage from '../components/Homepage';

const Home = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
};

export default Home;