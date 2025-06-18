const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.CALLBACK_URL + "/twitter/callback"
}, (token, tokenSecret, profile, done) => {
  return done(null, { id: profile.id, provider: 'twitter' });
}));