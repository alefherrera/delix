import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import {
  App,
  Order,
} from './containers';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="App" path="/" component={App}>
      <Route name="Order" path="order" component={Order} />
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
