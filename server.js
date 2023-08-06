const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const $ = require('jquery');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);



app.use(express.static(__dirname + '/public'));

var API_KEY = '35413306-7f2c1e168b9469889cb1cc371';

var API_KEY = '35413306-7f2c1e168b9469889cb1cc371';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data) {
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    else
        console.log('No hits');
});


io.on('connection', (socket) => {
    console.log('A user connected');
    
    

    socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

