// src/components/Footer.js
// Inspiration for the Footer from here: https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Make sure to import your icons

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white"> 
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Jericho Koskinen</p>
            <p>All of the rights reserved</p>
          </Col>
          <Col md={6}>
            <a href="https://github.com/JeriChopper" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={30} color="#fff" />
            </a>
            <a href="https://www.linkedin.com/in/jerichokoskinen" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#fff" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

