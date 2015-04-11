var express = require('express');
var app = express();
app.use(express.static('../ui'));

var server = app.listen(1337, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is running at http://%s:%s', host, port);
});
