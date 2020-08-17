var app = require('express')();
var http = require('http').createServer(app);
const sOptions = {};
var io = require('socket.io')(http, sOptions);

MessageQueue = require('./MessageQueue');
var mq = new MessageQueue(100);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
	mq.getAll().forEach((msg) => {
		socket.emit('chat message', msg);
	});
	socket.on('disconnect', () => {
    console.log('user disconnected');
  });
	socket.on('chat message', (msg) => {
		mq.push(msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

