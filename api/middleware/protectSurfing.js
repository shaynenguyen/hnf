const cookieParser      = require('cookie-parser');
const helmet            = require('helmet');
// https://www.twilio.com/blog/2018/01/protect-your-node-js-app-from-cross-site-request-forgery.html
// const csrf              = require('csurf');

module.exports = {
    cookieParser:       cookieParser(),
    // csrfProtection:     csrf({ cookie: true}),
    helmet:             helmet()
}