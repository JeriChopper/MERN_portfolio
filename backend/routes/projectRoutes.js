// routes/projectRoutes.js

/**
 * Project Routes
 *
 * This file defines all of the routes related to projects. 
 * 
 * Endpoint: 
 * - POST /api/project: Post projects
 * - GET /api/project: Get projects and show them in the website
 * 
*/

import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();


/**
 * @route   GET /api/project
 * @desc    Gets the content from the database
 * @access  Public
 * 
*/ 
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
});

/**
 * @route   POST /api/project
 * @desc    POST content to the database
 * @access  Public
 * 
*/ 
router.post('/', async (req, res) => {
    const { title, description, technologies, githubLink } = req.body;

    if (!title || !description || !technologies || !githubLink) {
        return res.status(400).json({ message: 'Please provide all fields.' });
    }

    try {
        const newProject = new Project({
            title,
            description,
            technologies,
            githubLink
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;