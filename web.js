var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = null;

fs.readFile('Index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  buffer = new Buffer(data);
});

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


