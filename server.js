const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

app.use("/Cat-photos", express.static(path.join(__dirname, "Cat-photos")));


io.on('connection', (socket) => {
    console.log('A user connected');
    
    var random_pic = "Cat-photos/cat" + String(Math.ceil(Math.random()*62) + ".JPEG");
    socket.emit('send-cat', (random_pic));

    socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

