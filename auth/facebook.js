const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.CALLBACK_URL + "/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, { id: profile.id, provider: 'facebook' });
}));