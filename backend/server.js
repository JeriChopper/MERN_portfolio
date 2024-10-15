// server.js

/**
 * Server file
 *
 * This file defines all of backend functionality 
 * 
 * 
*/

import express from "express";
import dotenv from "dotenv";
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js'
import connectDB from './config/db.js'
import cors from 'cors';

dotenv.config();

const app = express();

// Use CORS to use multiple ports
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to database
connectDB();

// Confirmation that backend is running on the root.
app.get("/", (req,res) => {
    res.send("Server is ready");
})


// Use the Project Route
app.use('/api/projects', projectRoutes);

// Use the Contact Route
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});