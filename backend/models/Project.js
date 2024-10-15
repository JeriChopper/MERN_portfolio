// models/Project.js

/**
 * Project Schema
 *
 * This schema is the structure of the projects which are stored in the backend and fetched in the frontend.
 * Project schema is done with Mongoose.
 * 
 * Fields:
 * - title: The name of the project (required)
 * - describtion: Describtion of the project (required).
 * - technologies: Technologies used in the project as an array (required).
 * - githubLink: Link to project (required).
 * 
 * @module Project
*/

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    githubLink: {
        type: String,
        required: true 
    }
});

const Project = mongoose.model('Project', projectSchema);


export default Project;