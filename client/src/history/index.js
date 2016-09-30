import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

export default syncHistoryWithStore(browserHistory, store);
