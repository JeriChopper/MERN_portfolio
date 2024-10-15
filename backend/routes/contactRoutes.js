// routes/contactRoutes.js

/**
 * Contact Routes
 *
 * This file defines all of the routes related to the contact form. 
 * 
 * Endpoint: 
 * - POST /api/contact: Send a message (to Jericho)
 * 
*/

import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Sends message to the backend
 * @access  Public
 * 
*/ 

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
  
    try {
      // Create a new message document
      const newMessage = new Message({ name, email, subject, message });
      await newMessage.save();
      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to save message' });
    }
  });
  
export default router;