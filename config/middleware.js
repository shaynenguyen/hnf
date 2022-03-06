const cors      =   require("cors");
const Binance   =   require("node-binance-api");

/*
    CONFIG MIDDLEWARE IN USE FOR NODEJS SERVER
**/
const binance   = new Binance().options({
    APIKEY:     process.env.BINANCE_API,
    APISECRET:  process.env.BINANCE_KEY
});


module.exports = function(app){
    app.use(cors());
}