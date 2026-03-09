const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); 
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connects to your MongoDB Atlas

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// 1. API Routes
const rsvpRoutes = require('./routes/rsvp');
app.use('/api/rsvp', rsvpRoutes);

// 2. Serve Static Files (Production Logic)
// Since the 'build' folder is now INSIDE the Backend folder
const frontendBuildPath = path.join(__dirname, 'build'); 
app.use(express.static(frontendBuildPath));

// 3. Client-Side Routing Fix
// This ensures your wedding site pages don't 404 on refresh
app.get('/:path*', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 Ready for Dec 4, 2026 RSVPs!`);
});