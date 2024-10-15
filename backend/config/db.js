// backend/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jerichokoskinen:oEchSygBg5rStSA7@portfoliodb.brct7.mongodb.net/?retryWrites=true&w=majority&appName=portfolioDB", {
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