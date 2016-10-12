import io from 'socket.io-client';
import { HOST } from './api/api';

export default () => io(HOST);
