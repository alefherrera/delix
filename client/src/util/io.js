import io from 'socket.io-client';

const HOST = `http://${location.hostname}:3002`;

export default () => io(HOST);
