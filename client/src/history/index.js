import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

export default syncHistoryWithStore(hashHistory, store);
