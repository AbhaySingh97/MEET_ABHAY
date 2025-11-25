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

if (MONGO_URI) {
    mongoose.connect(MONGO_URI)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.error('MongoDB Connection Error:', err));
} else {
    console.warn('MONGO_URI not found in environment variables');
}

// Static Data (Embedded for Vercel Reliability)
const projects = [
    {
        id: 1,
        title: "Smart Bazar",
        category: "tech",
        description: "Digital solution empowering roadside vendors at tourist locations through a verified vendor ecosystem.",
        fullDescription: "Smart Bazar is our digital solution designed to empower roadside vendors at tourist locations through a verified vendor ecosystem, helping build trust, transparency, and digital visibility.\n\nOut of lakhs of AKTU students, our project was shortlisted among the Top 35 teams in the finals — a moment of immense pride, even though we didn't secure a prize. The experience, learning, and recognition were far more rewarding!\n\nOne of the highlights was personally interacting with the CEO of ERA Foundation, who generously shared his vision, insights on grassroots innovation, and the importance of building scalable tech for real-world impact — an interaction I'll always value.\n\nThis Buildathon sharpened my problem-solving skills, deepened my understanding of real-world challenges, and reaffirmed my passion for building impactful solutions.",
        tech: ["React", "Node.js", "MongoDB", "Digital Ecosystem"],
        image: "/smart-bazar.jpg",
        link: "#",
        achievements: [
            "Top 35 out of lakhs of AKTU students",
            "Personal interaction with ERA Foundation CEO",
            "Focus on grassroots innovation and scalable tech"
        ]
    },
    {
        id: 2,
        title: "Smart Garbage Monitoring & Segregation System",
        category: "tech",
        description: "🥇 First Place Winner – IoT-based solution for automated waste segregation and monitoring at STEP UP exhibition.",
        fullDescription: "Presented our Smart Garbage Monitoring & Segregation System at the STEP UP two-day exhibition, showcasing an IoT-based solution for automated, hygienic, and sustainable waste management.\n\nOur project demonstrates an IoT-enabled solution that automatically segregates dry, wet, and metallic waste using advanced sensors and microcontrollers, promoting hygienic waste handling and supporting sustainable living.\n\nThis initiative highlights how technology-driven automation can transform modern waste management for greener and smarter communities. We were honored to win First Place in the Sensor Exhibition Final Round, validating our innovative approach to solving real-world environmental challenges.",
        tech: ["IoT", "Arduino", "Sensors", "Microcontrollers", "Automation"],
        image: "/smart-garbage.jpg",
        link: "#",
        achievements: [
            "🥇 First Place Winner – Sensor Exhibition Final Round",
            "Automated waste segregation (dry, wet, metallic)",
            "IoT-enabled monitoring system",
            "Showcased at STEP UP two-day exhibition"
        ]
    },
    {
        id: 4,
        title: "Carrier Takeoff: Sunset Sortie",
        category: "creative",
        description: "A cinematic 3D render capturing the intensity of a carrier launch at sunset.",
        fullDescription: "A meticulously crafted 3D visualization that captures the dramatic moment of a fighter jet launching from an aircraft carrier during sunset. This project showcases advanced lighting techniques, realistic material rendering, and atmospheric effects to create a cinematic experience.\n\nThe scene combines technical precision with artistic vision, featuring detailed aircraft modeling, dynamic lighting from the setting sun, and carefully composed camera angles that emphasize the power and scale of naval aviation operations.",
        tech: ["Blender", "Cycles", "Photoshop"],
        image: "/carrier-takeoff.jpg",
        link: "https://www.artstation.com/artwork/gR4bOm",
        achievements: [
            "Featured on ArtStation",
            "Advanced Cycles rendering techniques",
            "Cinematic lighting and composition"
        ]
    },
    {
        id: 3,
        title: "Architectural Harmony",
        category: "creative",
        description: "Bungalow concept render focusing on modern architectural aesthetics and lighting.",
        fullDescription: "An architectural visualization project that explores the intersection of modern design principles and natural lighting. This bungalow concept demonstrates expertise in architectural rendering, material accuracy, and environmental integration.\n\nThe project emphasizes clean lines, thoughtful spatial planning, and the interplay between interior and exterior spaces. Advanced rendering techniques in Unreal Engine 5 bring photorealistic quality to the visualization, making it an effective tool for architectural presentation.",
        tech: ["Blender", "ArchViz", "Unreal Engine 5"],
        image: "/architectural-harmony.jpg",
        link: "https://www.artstation.com/artwork/8BaNon",
        achievements: [
            "Photorealistic architectural visualization",
            "Unreal Engine 5 real-time rendering",
            "Modern design aesthetics"
        ]
    },
    {
        id: 5,
        title: "Neon Drift: The Chase",
        category: "creative",
        description: "Cyberpunk-inspired vehicle scene with dynamic neon lighting and atmosphere.",
        fullDescription: "A cyberpunk-themed 3D scene that immerses viewers in a neon-lit urban chase. This project showcases expertise in creating atmospheric environments, working with complex lighting setups, and developing a cohesive visual narrative.\n\nThe scene features custom-textured vehicles, volumetric lighting effects, and a carefully crafted color palette that evokes the cyberpunk aesthetic. Substance Painter was used extensively for creating detailed, weathered materials that add authenticity to the futuristic setting.",
        tech: ["Blender", "Eevee", "Substance Painter"],
        image: "/neon-drift.jpg",
        link: "https://www.artstation.com/artwork/K398vG",
        achievements: [
            "Complex neon lighting setup",
            "Custom PBR materials in Substance Painter",
            "Atmospheric world-building"
        ]
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
