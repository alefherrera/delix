import React from 'react';
import ReactDOM from 'react-dom';
import App from './config';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
   rootEl
 );

if (module.hot) {
  module.hot.accept('./config', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./config').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
