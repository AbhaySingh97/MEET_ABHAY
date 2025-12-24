const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    if (!MONGO_URI) {
        throw new Error('MONGO_URI not found in environment variables');
    }

    try {
        const db = await mongoose.connect(MONGO_URI);
        cachedDb = db;
        console.log('MongoDB Connected');
        return db;
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        throw err;
    }
}

// Ensure DB is connected for every request that needs it
app.use(async (req, res, next) => {
    // Skip DB connection for health check and static data
    if (req.path === '/api' || req.path === '/api/projects' || req.path === '/api/journey' || req.path === '/api/stats' || req.path === '/api/socials') {
        return next();
    }

    try {
        await connectToDatabase();
        next();
    } catch (err) {
        console.error('DB Middleware Error:', err);
        // Don't block the request, let the specific route handle the error if it needs DB
        next();
    }
});

// Static Data (Embedded for Vercel Reliability)
const projects = [
    {
        id: 1,
        title: "Test Project",
        category: "tech",
        description: "Test description",
        fullDescription: "Test full description",
        tech: ["React"],
        image: "/test.jpg",
        link: "#",
        achievements: ["Test achievement"]
    }
];

const journey = [
    {
        id: 1,
        year: "2025",
        title: "Full Stack Developer",
        company: "Freelance",
        description: "Developing web applications using MERN stack and exploring 3D technologies."
    },
    {
        id: 2,
        year: "2024",
        title: "Volunteer",
        company: "Light de Literacy",
        description: "Volunteered as a tutor for underprivileged children."
    },
    {
        id: 3,
        year: "2024",
        title: "BTech CS-AI Student",
        company: "ABESIT",
        description: "Pursuing Bachelor of Technology in Computer Science and Artificial Intelligence."
    },
    {
        id: 4,
        year: "2023",
        title: "Senior Secondary Education",
        company: "SSA Vidhyapith",
        description: "Completed Senior Secondary Education with a CGPA of 8.1."
    },
    {
        id: 5,
        year: "2022",
        title: "3D Artist",
        company: "Freelance",
        description: "Created 3D models and animations for various projects."
    },
    {
        id: 6,
        year: "2021",
        title: "Secondary Education",
        company: "KMCA",
        description: "Completed Secondary Education with 82%."
    }
];

const stats = {
    skills: [
        { subject: 'React', A: 130, fullMark: 150 },
        { subject: '3D Art', A: 140, fullMark: 150 },
        { subject: 'Blender', A: 135, fullMark: 150 },
        { subject: 'Unreal', A: 110, fullMark: 150 },
        { subject: 'Node.js', A: 120, fullMark: 150 },
        { subject: 'Full Stack', A: 125, fullMark: 150 },
    ],
    contributions: [
        { category: 'Web Dev', projects: 12, color: '#81B29A' },
        { category: '3D Art', projects: 15, color: '#E07A5F' },
        { category: 'UI/UX', projects: 8, color: '#F2CC8F' },
        { category: 'Backend', projects: 10, color: '#3D405B' },
        { category: 'Competitions', projects: 5, color: '#F4A261' },
    ]
};

const socials = [
    {
        id: 1,
        platform: "LinkedIn",
        username: "User Name",
        bio: "Full Stack Developer | React & Node.js Enthusiast",
        stats: {
            connections: "500+",
            posts: "120",
            views: "1.5k"
        },
        link: "https://linkedin.com",
        color: "#0077b5",
        icon: "FaLinkedin"
    },
    {
        id: 2,
        platform: "LeetCode",
        username: "user_dev",
        bio: "Solving complex problems one algorithm at a time.",
        stats: {
            solved: "450",
            ranking: "Top 5%",
            streak: "50 days"
        },
        link: "https://leetcode.com",
        color: "#ffa116",
        icon: "SiLeetcode"
    }
];

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
            await connectToDatabase(); // Try to connect again if not ready
        }

        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        console.log('Feedback Saved:', { name, email });
        res.json({ success: true, message: 'Message received and saved!' });
    } catch (err) {
        console.error('Error processing contact form:', err);
        // Return the specific error message to the client for debugging
        res.status(500).json({ success: false, message: err.message || 'Server error' });
    }
});

module.exports = app;
