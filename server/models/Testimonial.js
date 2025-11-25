const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    approved: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
