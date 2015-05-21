var express = require ('express'),
    app = express(),
    // we need to bring in something to do a node web server
    // we put in app so it knows its an express server
    http = require('http').Server(app),
    // we are putting http their, because it tells it to upgrade to
    // socket, this is the handshake
    io = require('socket.io')(http);

app.get('/', function(request,response){
  // this sends a file back to the person
  // two underscore
    response.sendFile(__dirname + '/index.html');
});
// calling on the http module
http.listen(3000, function(){
    console.log('Listening on localhost:3000')
});

