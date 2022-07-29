var app = require('express')();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', socket => {
    socket.on('clientMessage', msg => {
        io.emit('serverMessage', msg);
    });
});

httpServer.listen(9090);
console.log('chat server running on port 9090');


