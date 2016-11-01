import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class Header extends React.Component {

  state = {
    open: false,
  }

  handleMenuClick = () => {
    this.setState({ open: !this.state.open });
  }

  renderLink = (path, title) => (
    <Link
      to={path}
      onClick={this.handleMenuClick}
    >
      <MenuItem primaryText={title} />
    </Link>
  );

  renderMenu(open) {
    return (
      <Drawer docked={false} open={open} onRequestChange={this.handleMenuClick}>
        {this.renderLink('/sector', 'Sectores')}
        {this.renderLink('/producto', 'Productos')}
        {this.renderLink('/plato', 'Platos')}
        {this.renderLink('/promo', 'Promos')}
        {this.renderLink('/visor', 'Comandas')}
        {this.renderLink('/franja', 'Franjas')}
        {this.renderLink('/reserva', 'Reservas')}
        {this.renderLink('/tickets', 'Tickets')}
        {this.renderLink('/configuraciones', 'Settings')}
      </Drawer>
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title="Delix"
          onLeftIconButtonTouchTap={this.handleMenuClick}
        />
        {this.renderMenu(this.state.open)}
      </div>
    );
  }

}

export default Header;
