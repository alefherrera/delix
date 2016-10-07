import React from 'react';
import AppBar from 'material-ui/AppBar';
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
    <Link to="/mesa"><MenuItem primaryText="Mesas" /></Link>
    <Link to="/producto"><MenuItem primaryText="Productos" /></Link>
    <Link to="/plato"><MenuItem primaryText="Platos" /></Link>
    <Link to="/promo"><MenuItem primaryText="Promos" /></Link>
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
