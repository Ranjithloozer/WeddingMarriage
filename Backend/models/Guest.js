const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    default: 1,
  },
  attendance: {
    type: String,
    default: 'yes',
  },
  songRequest: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Guest', GuestSchema);