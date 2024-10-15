// backend/config/db.js

/**
 * Database connection file
 *
 * This file defines the connection to the database
 * 
 * .env is used to store the MONGODB connection link.
 * 
 * 
*/


import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    const dbstring = process.env.URI;
    try {
        await mongoose.connect(dbstring, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;