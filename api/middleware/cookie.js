const session       = require('express-session')
const MongoStore    = require('connect-mongo');
require('dotenv').config();
/**
 * see      https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely
 * video    https://www.youtube.com/watch?v=J1qXK66k1y4
 */

/**
 * Options Setting
 */
const expiryDate = 1000 * 60 * 60 * 24 // 1 Day
const sessionStore = new MongoStore({
    mongoUrl:       process.env.MONGODB_URL,
    collection:     'sessions'
})
const options = {
    name:               'sessionHF',
    secret:             process.env.SESSION_SECRET,
    resave:             false,
    saveUninitialized:  true,
    store:              sessionStore,
    cookie: {
        maxAge:         expiryDate,
    }
}

module.exports = session(options)