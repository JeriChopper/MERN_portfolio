// src/components/HomePage.js

/**
 * Home page component
 * 
 * This component renders the home/ root page component
 * 
 * 
 * Styling made with React Bootstrap / CSS
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
 * I used react-bootstrap docs to manipulate the image to my liking: https://react-bootstrap.netlify.app/docs/components/images
*/


import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ minHeight: '75vh', textAlign: 'center' }}
        >
            <Row className="align-items-center justify-content-center mb-5 w-100">
                <Col md={3} className="text-center">
                    <Image src="/images/profile.jpg" fluid />
                </Col>
                <Col md={8}>
                    <h1>Hello, I'm Jericho</h1>
                    <p>
                        I'm a software engineer from Finland and I am looking for jobs in my field.
                    </p>
                    <Button variant="primary" href="projects">View My Work</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
