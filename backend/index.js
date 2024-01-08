const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const poetryRoutes = require('./routes/poetryRoute');

// Connect to MongoDB
const DB_URL = 'mongodb+srv://ghulamakbar:ghulamakbar@cluster0.tfxzcvr.mongodb.net/?retryWrites=true&w=majority';

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use cors middleware to handle CORS headers
app.use(cors());

// Routes
app.use('/api', poetryRoutes);


mongoose.connect(DB_URL).then(() => { console.log('Connected to database') }).catch((error) => { console.log(error) });


app.listen(2000, () => { console.log('server started') });
