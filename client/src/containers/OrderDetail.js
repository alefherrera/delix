import React, { PropTypes } from 'react';
import OrderDetailForm from '../components/Order/OrderDetail/OrderDetailForm';
import { connect } from 'react-redux';
import * as actions from '../actions/ticket';

class OrderDetail extends React.Component {

  componentDidMount() {
    const { current, params, getTicket } = this.props;
    const { pedidoId } = params;
    if (!current || current.id !== parseInt(pedidoId, 10)) {
      getTicket(pedidoId);
    }
  }

  render() {
    const { current } = this.props;
    if (!current) return null;
    return (
      <OrderDetailForm
        ticket={current}
      />
    );
  }

}

OrderDetail.propTypes = {
  current: PropTypes.object,
  getTicket: PropTypes.func,
  params: PropTypes.object,
};

export default connect(
  state => state.ticket,
  { ...actions }
)(OrderDetail);
