var fs = require("fs");
var http = require('http');

process.on('uncaughtException', function(err) {
    console.error(err.stack);
});

var app = require("./app");
var server = http.createServer(app);
server.listen(app.get("port"), function() {
    console.log('Express server listening on port: ' + app.get("port"));
});