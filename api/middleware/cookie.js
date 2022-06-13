const cookieSession = require('cookie-session');
require('dotenv').config();

module.exports = () => {
    return cookieSession({
        maxAge: 8 * 60 * 60 * 1000,
        keys: process.env.COOKIE_SECRET
    })
}