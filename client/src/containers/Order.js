import React, { PropTypes } from 'react';
import OrderForm from '../components/Order/OrderForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick() {
    this.props.createOrder({
      usuarioId: 1,
      grupoDeMesasId: 1,
      pedidoEstadoId: 1,
    });
  }

  render() {
    return (
      <OrderForm
        onCreateClick={this.handleCreateClick}
      />
    );
  }

}

Order.propTypes = {
  createOrder: PropTypes.func,
};

export default connect(state => state.order, { ...actions })(Order);
