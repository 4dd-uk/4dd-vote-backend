const express = require('express');
const session = require('express-session');
require('dotenv').config();
const passport = require('passport');
const authRoutes = require('./routes/auth');
const voteRoutes = require('./routes/vote');

require('./auth/google');
require('./auth/facebook');
require('./auth/twitter');

const app = express();

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api', voteRoutes);

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});