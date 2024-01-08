const express = require('express');
const router = express.Router();
const { getAllPoetries, createPoetry } = require('../controllers/poetryController');

// Route for getting all poetries
router.get('/getpoetries', getAllPoetries);

// Route for creating a poetry
router.post('/createpoetries', createPoetry);

module.exports = router;
