var ioFactory = require('socket.io');

module.exports = app => {
  const io = ioFactory(app);
  io.on('connection', socket => {
    console.log('new connection');
    socket.emit('news', { hello: 'world' });
    socket.on('test', data => console.log('data:', data));
  })
}
