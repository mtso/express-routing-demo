var demoRoute = require('./routes/demo-routes');
var express = require('express');
var http = require('http');

var app = express();
app.use('/', demoRoute);
app.use('/*', function(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('You have reached the node-express routing demo, try accessing <a href="/demo">/demo</a>');
});

var server = http.createServer(app);
server.listen(5002, 'localhost');
console.log('Listening on localhost:5002...');