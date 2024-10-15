// src/components/ContactForm.js

/**
 * Contact form component
 * 
 * This component renders a contact form where users can send messages.
 * After the user presses the "Send Message" Button with success it will store the information of the message in the backend
 * 
 * Styling made with React Bootstrap
 * HTTP Requests with Axios
 * 
 * @returns {JSX.Element}
 * 
 * 
 * This form was made with the help of this tutorial: https://www.youtube.com/watch?v=8mOfUaIRmrE
*/





import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from 'axios'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: '600px', padding: '20px' }}>
      <h2 className="text-center mb-4">Contact Me</h2>
      {success && <Alert variant="success">Message sent successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-3"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-3"
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mb-3"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
            className="mb-3"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
