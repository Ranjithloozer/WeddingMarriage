const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // In Mongoose 6+, you just need the URI. No options object is required.
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`✅ MongoDB Cloud Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Connection Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;