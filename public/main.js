const socket = io();

catpic = document.getElementById("catpic");

socket.on('send-cat', (data) => {
    catpic.innerHTML = `<img src="${data}" alt="Random Cat Picture">`;
});