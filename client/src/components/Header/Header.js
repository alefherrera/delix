import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const OrderLink = (
  <Link to="order">
    <FlatButton label="Order" />
  </Link>
);

const Header = () => (
  <div>
    <AppBar
      title="Delix"
      iconElementRight={OrderLink}
    />
  </div>
);

export default Header;
