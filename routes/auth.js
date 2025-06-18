const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login-fail' }),
  (req, res) => res.redirect('/vote-success')
);

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login-fail' }),
  (req, res) => res.redirect('/vote-success')
);

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login-fail' }),
  (req, res) => res.redirect('/vote-success')
);

module.exports = router;