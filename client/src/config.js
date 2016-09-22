import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './history';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

export default App;
