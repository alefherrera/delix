import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';

const history = process.env.ANDROID ?
syncHistoryWithStore(hashHistory, store)
: syncHistoryWithStore(browserHistory, store);

export default history;
