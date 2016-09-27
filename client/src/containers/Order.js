import React, { PropTypes } from 'react';
import OrderForm from '../components/OrderForm/OrderForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

const Order = ({
  createOrder,
}) => (
  <OrderForm
    onCreateClick={createOrder}
  />
);

Order.propTypes = {
  createOrder: PropTypes.func,
};

export default connect(state => state.order, { ...actions })(Order);
