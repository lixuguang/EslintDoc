var http = require('http');
var request = require('request');

http
  .createServer(function (req, res) {
    //handle resquest and response
    debugger
    console.log(req.url);
    request()
  })
  .listen(8080);
