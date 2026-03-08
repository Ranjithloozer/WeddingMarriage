const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Uses your long connection string

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 Ready for Dec 4, 2026 RSVPs!`);
});