import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Fab = ({ children, onClick }) =>
(
  <div style={{ position: 'fixed', right: 0, bottom: 0, padding: 25 }}>
    <FloatingActionButton
      onTouchTap={onClick ? () => onClick() : undefined}
    >
      {children}
    </FloatingActionButton>
  </div>
);

Fab.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Fab;
