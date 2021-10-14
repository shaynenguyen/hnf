const request = require("request");

module.exports = function(app, Binance, config){
    const binance = new Binance().options({
        APIKEY: config.API,
        APISECRET: config.KEY
    });
    // binance.futuresMiniTickerStream( 'ADAUSDT', function(data){
    //     // console.log("Server is socketting Binance Stream !!!");
    //     app.io.sockets.emit("Server-send-price", data.close)
    // });

    app.get('/binance', (req, res) => {
        var listPair = [];
        request('http://api.binance.com/api/v3/ticker/bookTicker', function(error, response, body){

            body = JSON.parse(body);
            // console.log(body[0].symbol);
            for (var i in body)
                listPair.push([body[i].symbol])
            res.render('binance', { title: 'Binance Communication', listSymbol: listPair})
        })

    })

}