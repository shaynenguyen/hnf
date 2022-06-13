const passport          = require('passport');
const GoogleStrategy    = require('passport-google-oauth20');
require('dotenv').config();

// Serialize User
passport.serializeUser((user, done) => {
    done(null, user.id);
})

// Deserialize User
passport.deserializeUser((id, done) => {
    // User.findById(id).then((user) => {
    //  done(null,user);
    // })
})

// Strategy
passport.use(
    new GoogleStrategy({

        // Options for the google strategy
        clientId:       process.env.GOOGLE_PLUS_API_CLIENT_ID,
        clientSecret:   process.env.GOOGLE_PLUS_API_CLIENT_SECRET,
        callbackURL:    process.env.GOOGLE_PLUS_API_CALLBACK,
        scope:          ['profile']
    }, (accessToken, refreshToken, profile, done ) => {

        // Passport callback function
        console.log({ profile });
        // TODO: pass 'profile' to Controller (User) Layer
        //      instead calling Service (User) Layer from here
    })
)