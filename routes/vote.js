const express = require('express');
const router = express.Router();
const { recordVote, getVoteCount } = require('../models/votes');

router.post('/vote', (req, res) => {
  if (!req.user) return res.status(403).json({ message: 'Not logged in' });
  recordVote(req.user.id, req.user.provider);
  res.json({ message: 'Vote recorded' });
});

router.get('/vote-count', async (req, res) => {
  const count = await getVoteCount();
  res.json({ totalVotes: count });
});

module.exports = router;