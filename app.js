
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { YSocketIO } = require('y-socket.io/dist/server');

const app = express();
const server = http.createServer(app);

const port = 1234;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const io = socketIO(server);
const ysocketio = new YSocketIO(io);
ysocketio.initialize();


