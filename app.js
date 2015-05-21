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
// this is the begininng of the emmitters we are using
// remember io is a middleware
io.on('connection', function(socket){
  console.log("You are live on Chit Chat!");
  // waiting for a chat message to happen
  socket.on('chat message', function(msg){
    // when someone writes msg its emitted
    io.emit('chat message', msg);
  });
  // disconnects someone when they leave our app
  socket.on('disconnect', function(){
    console.log("Someone is outta here");
  });
});

// calling on the http module
http.listen(3000, function(){
    console.log('Listening on localhost:3000')
});

