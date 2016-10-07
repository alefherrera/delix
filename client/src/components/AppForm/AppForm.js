import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './style.css';

const AppForm = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      {children}
    </div>
  </MuiThemeProvider>
);

AppForm.propTypes = {
  children: PropTypes.any,
};

export default AppForm;
