import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './history';
import store from './store';
import { IntlProvider } from 'react-intl';
const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <Routes history={history} />
    </IntlProvider>
  </Provider>
);

export default App;
