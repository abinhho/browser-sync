var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 9000;

server.listen(port, function(){
	console.log('Runing port: '+ port);
});

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
