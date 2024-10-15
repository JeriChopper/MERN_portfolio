// src/pages/Contact.js

/**
 * Contact page
 * 
 * This displays the /contact page which consists of the contactForm.js component
 * 
 * 
 * Styling inherited from contactForm.js
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
*/

import React from 'react';
import ContactForm from '../components/ContactForm.js';


const Contact = () => {
    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default Contact;