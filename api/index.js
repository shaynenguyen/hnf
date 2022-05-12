// 1. Import dependencies
// ======================
const express       = require('express');
const mongoose      = require('mongoose');

const database      = require('./database');
const app           = express();

// 1.2 middleware configuration
app.use(express.json()) // Init body-parser options (inbuilt with express)
database(app)

// 2. Require & Import API ROUTES
// ==============================
const testAPi = require('./rest')

app.use(testAPi)



// 3. Export the server middleware ( Extend server )
// =================================================
module.exports = {
    path: "/api",
    handler: app
}