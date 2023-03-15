const mongoose    = require('mongoose')
require('dotenv').config();

module.exports = async function(app) {
  // This warning was introduced to notify users
  // about the change that will be introduced in Mongoose 7
  // to the default value of strictQuery.
  // It's default value will be brought back to false.
  mongoose.set('strictQuery', true);

  // Connect to Database Host
  await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, function(err){
      if(err) {
        console.log("Database connection has counter an error: " + err);
      }else {
        // Connection  status
        console.log("Database (MongoDB) is connected !!!");
      }
  })
}