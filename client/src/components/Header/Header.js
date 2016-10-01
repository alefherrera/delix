import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const OrderLink = (
  <FlatButton
    label={
      <Link to="/pedido">
        Pedido
      </Link>
    }
  />
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
