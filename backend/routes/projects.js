import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving projects', error: error.message });
  }
});

// @desc    Add a project (for convenience or admin use)
// @route   POST /api/projects
router.post('/', async (req, res) => {
  try {
    const { title, description, category, tags, image, demoUrl } = req.body;
    
    if (!title || !description || !category || !image) {
      return res.status(400).json({ message: 'Please provide all required fields (title, description, category, image)' });
    }

    const newProject = new Project({
      title,
      description,
      category,
      tags,
      image,
      demoUrl
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Server error adding project', error: error.message });
  }
});

export default router;
