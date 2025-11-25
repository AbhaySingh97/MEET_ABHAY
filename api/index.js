const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// Models
const Feedback = require('./models/Feedback');
const Testimonial = require('./models/Testimonial');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
    mongoose.connect(MONGO_URI)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.error('MongoDB Connection Error:', err));
} else {
    console.warn('MONGO_URI not found in environment variables');
}

// Static Data
const projects = require('./data/projects');
const journey = require('./data/journey');
const stats = require('./data/stats');
const socials = require('./data/socials');

// Health Check
app.get('/api', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});

// Routes
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/journey', (req, res) => {
    res.json(journey);
});

app.get('/api/stats', (req, res) => {
    res.json(stats);
});

app.get('/api/socials', (req, res) => {
    res.json(socials);
});

// Testimonials: Fetch from DB
app.get('/api/testimonials', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.json([]); // Return empty if DB not connected
        }
        const testimonials = await Testimonial.find({ approved: true }).sort({ date: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Testimonials: Add new (POST)
app.post('/api/testimonials', async (req, res) => {
    const { name, role, text, avatar } = req.body;
    try {
        if (mongoose.connection.readyState !== 1) {
            throw new Error('Database not connected');
        }
        const newTestimonial = new Testimonial({ name, role, text, avatar });
        await newTestimonial.save();
        res.status(201).json({ success: true, message: 'Testimonial submitted for approval!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Contact: Save to DB
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        if (mongoose.connection.readyState !== 1) {
            throw new Error('Database not connected');
        }
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        console.log('Feedback Saved:', { name, email });
        res.json({ success: true, message: 'Message received and saved!' });
    } catch (err) {
        console.error('Error processing contact form:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = app;
