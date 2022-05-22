// 1. Import dependencies
// ======================
const express               = require('express');
const promiseMiddleware     = require('./middleware/promise');
const routes                = require('./routes');
const app                   = express();

// 1.2 middleware configuration
app.use(express.json()) // Init body-parser options (inbuilt with express)
app.use(promiseMiddleware());

// 2. Require & Import API ROUTES
// ==============================
routes(app);


//The 404 Route (ALWAYS Keep this as the last route)
// app.get('*', function(req, res){
//     res.status(404).send({
//         message: 'API Route ('+ req.url+') Not Found!'
//     });
// });

// 3. Export the server middleware ( Extend server )
// =================================================
module.exports = {
    path: "/api",
    handler: app
}