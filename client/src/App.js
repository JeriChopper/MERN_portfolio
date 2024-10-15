// src/App.js

/**
 * App Component
 * 
 * Main application component that is the entry point of this React application
 * This component sets up the routing, states and renders the layout of this application
 * 
 * React router is used for navigation 
 * Styling inherited from page components.
 * 
 * Components which this file includes:
 * Navbar: Included in each page at the top of the page
 * Footer: Included in each page at the bottom of the page
 * Routes: Each file in /pages folder is rendered and routed from this component.
 * 
 * @returns {JSX.Element}
 * 
 * 
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routers for page navigation
import Home from './pages/Home';
import Projects from './pages/Projects';
import Banner from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Contact from './pages/Contact';
import './App.css'; // Import CSS
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Banner />
                <div className='flex-grow-1'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;