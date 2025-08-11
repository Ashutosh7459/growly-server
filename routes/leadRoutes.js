const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// POST route to save lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    const lead = new Lead({ name, email, phone, businessType, message });
    await lead.save();

    res.status(201).json({ message: 'Lead saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
