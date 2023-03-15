/*
    CONFIG ROUTES FOR NODE APP
*/

// Dependencies
const mongoose    = require('mongoose')
require('dotenv').config();

// Route in use
const authRoute             = require('./routes/auth.route');
const projectRoute          = require('./routes/project.route');
const userRoute             = require('./routes/user.route');
const privateRoute          = require('./routes/private.route');
const errorMiddleware       = require('./middleware/errorHandler');

// This warning was introduced to notify users
// about the change that will be introduced in Mongoose 7
// to the default value of strictQuery.
// It's default value will be brought back to false.
mongoose.set('strictQuery', true);

module.exports = async (app) => {
    // Connect to Database Host
    await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useNewUrlParser:    true,
                useUnifiedTopology: true
            },
            function(err){
            if(err) {
                console.log("Database connection has counter an error: " + err);
            }else {
                // Connection  status
                console.log("Database (MongoDB) is connected !!!");

                // Routes
                // app.use('/oauth', authRoute);
                app.use('/project', projectRoute);
                app.use('/sessions', authRoute);
                app.use('/user', userRoute);
                app.use('/private', privateRoute);

                // General error handling
                /**
                 * Any error handler middleware must
                 * be added AFTER defined routes.
                 * =================================
                 */
                app.use(errorMiddleware);
            }
        }
    )
}