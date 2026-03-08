const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

// POST: Save RSVP to Atlas
router.post('/', async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    const savedGuest = await newGuest.save();
    console.log("✅ Guest Saved:", savedGuest);
    res.status(201).json(savedGuest);
  } catch (err) {
    console.error("❌ Save Error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET: Fetch all guests for the counter
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;