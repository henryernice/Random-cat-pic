const socket = io();

let clicks = 0;

document.addEventListener('click', action);
function action() {
    clicks += 1;
    socket.emit('click', clicks);
}

socket.on('sqrt-click', (data) => {
    socket.emit('click', data);
})