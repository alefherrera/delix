import io from 'socket.io-client';
import { getHost } from './api/api';

export default () => io(`${getHost()}:3002`);
