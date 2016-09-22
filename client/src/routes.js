import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import Title from './components/Title';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="Title" path="/" component={Title} />
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
