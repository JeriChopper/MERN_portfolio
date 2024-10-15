// models/Message.js

/**
 * Message Schema
 *
 * This schema is the structure of the message which comes from the frontend and is stored in MongoDB
 * Message schema is done with Mongoose.
 * 
 * Fields:
 * - name: The name of the sender (required)
 * - email: Email of the sender (required).
 * - subject: Subject of the message (required).
 * - message: Content of the message (required).
 * 
 * @module Message
*/

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
});

const Message = mongoose.model('Message', messageSchema);
  
export default Message;