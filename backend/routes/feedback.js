const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const axios = require('axios');

const frillApiUrl = 'https://api.frill.co/v1/feedback';
const frillApiKey = process.env.FRILL_API_KEY;

router.post('/', async (req, res) => {
  const { username, category, rating, comments } = req.body;
  const feedback = new Feedback({ username, category, rating, comments });

  try {
    const savedFeedback = await feedback.save();

    await axios.post(
      frillApiUrl,
      { username, category, rating, comments },
      { headers: { Authorization: `Bearer ${frillApiKey}` } }
    );

    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.aggregate([
      {
        $group: {
          _id: '$category',
          averageRating: { $avg: '$rating' },
          feedbacks: { $push: { rating: '$rating', comments: '$comments' } },
        },
      },
    ]);

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
