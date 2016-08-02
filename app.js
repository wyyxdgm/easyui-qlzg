// Load required packages
var express = require('express');
var app = express();
app.use
app.set('port', require('./config').port);
app.use(express.static(require('path').resolve(__dirname, 'static/public')));
app.use('/api', function(req, res) {
    res.send([{
        "ck": true,
        "productid": 1,
        "productname": "hh"
    }, {
        "ck": true,
        "productid": 2,
        "productname": "hhff"
    }, {
        "ck": true,
        "productid": 111,
        "productname": "h22h"
    }, {
        "ck": true,
        "productid": 133,
        "productname": "1hh"
    }])
});
app.use('/', function(req, res) {
    res.redirect("/html/easyui.html")
});
module.exports = app;