const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../server/.env') });

// Import server app
const serverApp = require('../server/index');

module.exports = serverApp;
