var express = require('express');
var app = express();
app.use(express.static('../ui/base/'));

var server = app.listen(1337, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is running at http://%s:%s', host, port);
});

var urls = {
  '/' : '/site'
};
app.get('/', function(request, response){
  response.writeHead(301,
  {Location: urls['/']});
  response.end();
});
