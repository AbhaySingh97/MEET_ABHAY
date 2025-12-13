const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    visitorId: {
        type: String,
        required: true,
        index: true
    },
    sessionId: {
        type: String,
        required: true,
        index: true
    },
    ip: {
        type: String
    },
    source: {
        type: String,
        default: 'Direct'
    },
    page: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
