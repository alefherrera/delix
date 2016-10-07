import React, { PropTypes } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Header from '../components/Header/Header';

const App = ({ children }) => (
  <div>
    <AppForm>
      <Header />
      <div>
        {children}
      </div>
    </AppForm>
  </div>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
