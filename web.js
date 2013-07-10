var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer( fs.readFile('index.html',  function (err,data) {
  if (err) throw err;
  console.log('Error while reading from Index.html'); 
}));

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


