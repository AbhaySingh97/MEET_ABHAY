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
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Static Data (for fallback or other sections)
const projects = require('./data/projects');
const journey = require('./data/journey');
const stats = require('./data/stats');

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

// Testimonials: Fetch from DB
app.get('/api/testimonials', async (req, res) => {
    try {
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
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        console.log('Feedback Saved:', { name, email });
        res.json({ success: true, message: 'Message received and saved!' });
    } catch (err) {
        console.error('Error processing contact form:', err);
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
}
