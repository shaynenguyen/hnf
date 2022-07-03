// 1. Import dependencies
// ======================
const express                   = require('express');
const errorHandlerMiddleware    = require('./middleware/errorHandling');
const surfingMiddleware         = require('./middleware/protectSurfing');
const session                   = require('./middleware/cookie');
const routes                    = require('./routes');
/**
 * Express configuration
 */
const app                       = express();


// 2. middleware configuration
// ===========================
app.use(session);
app.use(express.json()) // Init body-parser options (inbuilt with express)
app.use(express.urlencoded({extended: true}));


app.use(surfingMiddleware.cookieParser);
app.use(surfingMiddleware.helmet);
app.use(surfingMiddleware.csrfProtection);

// 3. Require & Import API ROUTES
// ==============================
routes(app);


// 4. General error handling
// =========================
/**
 * Any error handler middleware must
 * be added AFTER defined routes.
 */
app.use(errorHandlerMiddleware);

// 5. Export the server middleware ( Extend server )
// =================================================
module.exports = {
    path: "/api",
    handler: app
}