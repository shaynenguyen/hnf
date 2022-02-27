// 1. Import dependencies
const express           = require('express');
const app               = express();
require('dotenv').config();

// 1.1 configuration dependencies
const configViewEngine  = require('./config/viewEngine');
const middleware        = require('./config/middleware');
const configRoute       = require('./config/routes');

// 1.2 middleware configuration.
app.use(express.json())

// 1.3 Hookup custom configuration
configViewEngine(app);
configRoute(app);
middleware(app);

// 2. Import routes for api

// 3. Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})