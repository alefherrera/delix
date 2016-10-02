import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const Links = (
  <div>
    <FlatButton
      label={
        <Link to="/pedido">
          Pedido
        </Link>
      }
    />
    <FlatButton
      label={
        <Link to="/producto">
          Productos
        </Link>
      }
    />
    <FlatButton
      label={
        <Link to="/plato">
          Platos
        </Link>
      }
    />
    <FlatButton
      label={
        <Link to="/promo">
          Promo
        </Link>
      }
    />
  </div>
);

const Header = () => (
  <div>
    <AppBar
      title="Delix"
      iconElementRight={Links}
    />
  </div>
);

export default Header;
