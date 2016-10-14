import React, { PropTypes } from 'react';
import OrderForm from '../components/Order/OrderForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class Order extends React.Component {

  componentWillMount() {
    this.props.createOrder({
      usuarioId: 1,
      grupoDeMesasId: this.props.params.mesaId,
    });
  }

  render() {
    const { list } = this.props;
    return (
      <OrderForm
        orders={list}
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
