import React, { PropTypes } from 'react';
import OrderDetailForm from '../components/Order/OrderDetail/OrderDetailForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class OrderDetail extends React.Component {

  componentDidMount() {
    const { current, params, getOrder } = this.props;
    const { pedidoId } = params;
    if (!current || current.id !== parseInt(pedidoId, 10)) {
      getOrder(pedidoId);
    }
  }

  render() {
    const { current } = this.props;
    if (!current) return null;
    return (
      <OrderDetailForm
        order={current}
      />
    );
  }

}

OrderDetail.propTypes = {
  current: PropTypes.object,
  getOrder: PropTypes.func,
  params: PropTypes.object,
};

export default connect(
  state => state.order,
  { ...actions }
)(OrderDetail);
