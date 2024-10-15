// src/components/Navbar.js

/**
 * Navigation bar component
 * 
 * This component renders the navigation bar
 * 
 * 
 * Styling made with React Bootstrap / CSS
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
 * I used react-bootstrap docs to manipulate the navbar: https://react-bootstrap.netlify.app/docs/components/navbar
*/


import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Banner = () => {
    return (
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Jericho Koskinen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Banner;