import io from 'socket.io-client';
const socket = io('http://localhost:3001');

socket.on('news', data => {
  console.log('news', data);
});