const express = require('express');
const socketIO = require('socket.io');

const app = express();

const server = app.listen(3000);
console.log("Server is running on port 3000.");

app.use(express.static('public'))

const io = socketIO(server);

io.sockets.on('connection', function(socket) {
    socket.on('mouse', function(data) {
        socket.broadcast.emit('mouse', data);
    })
})



