import React, { PropTypes } from 'react';
import OrderForm from '../components/Order/OrderForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class Order extends React.Component {

  componentWillMount() {
    this.props.getOrders();
  }

  handleCreateClick = () => {
    this.props.createOrder({
      id: null,
      usuarioId: 1,
      gruposDeMesaId: this.props.params.mesaId,
      pedidoEstadoId: 1,
    });
  }

  render() {
    const { list } = this.props;
    return (
      <OrderForm
        orders={list}
        onCreateClick={this.handleCreateClick}
      />
    );
  }

}

Order.propTypes = {
  createOrder: PropTypes.func,
  getOrders: PropTypes.func,
  list: PropTypes.array,
  params: PropTypes.object,
};

export default connect(state => state.order, { ...actions })(Order);
