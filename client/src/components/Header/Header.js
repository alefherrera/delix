import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

const Menu = (
  <IconMenu
    iconStyle={{ color: 'white' }}
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText={<Link to="/pedido">Pedidos</Link>} />
    <MenuItem primaryText={<Link to="/producto">Productos</Link>} />
    <MenuItem primaryText={<Link to="/plato">Platos</Link>} />
    <MenuItem primaryText={<Link to="/promo">Promos</Link>} />
  </IconMenu>
);

const Header = () => (
  <div>
    <AppBar
      title="Delix"
      iconElementRight={Menu}
      showMenuIconButton={false}
    />
  </div>
);

export default Header;
