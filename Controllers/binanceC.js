const request   =   require("request");

// List all symbols
const list_symbols = (req, res) => {
    var result = [];
    request('http://api.binance.com/api/v3/ticker/bookTicker', function(error, response, body){

        body = JSON.parse(body);
        body.forEach((element) => {
            result.push(element.symbol)
        })

        res.send(result)
    });
}

module.exports = {
    list_symbols
};