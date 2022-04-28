const express = require('express');
/*
    CONFIG VIEW ENGINE FOR NODE APP
*/
module.exports = function(app) {
    // Static Files
    app.use(express.static('Public'))
    // Example for other folders - not required
    // app.use('/css', express.static(__dirname + 'public/css'))

    app.set('view engine', 'ejs');
    app.set('views', './Views');
}
