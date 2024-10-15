// src/components/Aboutpage.js

/**
 * About page component
 * 
 * This component renders a page which includes text and progress bars.
 * 
 * 
 * Styling and progress bars made with React Bootstrap
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
 * I used react-bootstrap docs to create the progress bar: https://react-bootstrap.netlify.app/docs/components/progress
*/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

const AboutPage = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={8} className="mx-auto">
                    <h1 className="text-center mb-4">About Me</h1>
                    <p>
                        Hi, I'm Jericho, a passionate software engineer from Finland. I am currently studying my masters in software engineering at LUT-University.
                        I enjoy creating web/mobile applications but I am also heavily interested in efficient algorithms and security.
                    </p>
                    
                    <h2 className="mt-5">Programming Skills</h2>
                    <div>
                        <h4>Fullstack (MERN-Stack)</h4>
                        <ProgressBar now={90} label={`${90}%`} className="mb-3" />
                        
                        <h4>Python</h4>
                        <ProgressBar now={95} label={`${95}%`} className="mb-3" />
                        
                        <h4>DBMS </h4>
                        <ProgressBar now={85} label={`${85}%`} className="mb-3" />
                        
                        <h4>Java</h4>
                        <ProgressBar now={75} label={`${75}%`} className="mb-3" />
                        
                        <h4>C</h4>
                        <ProgressBar now={70} label={`${70}%`} className="mb-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
