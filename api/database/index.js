const mongoose    = require('mongoose')
require('dotenv').config();

module.exports = async function(app) {
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