import React, { PropTypes } from 'react';
import PaymentForm from '../../components/Payment/PaymentForm';
import { connect } from 'react-redux';
import * as actions from '../../actions/payment';

class Payment extends React.Component {

  componentDidMount() {
    this.props.getPayments();
  }

  render() {
    const { list } = this.props;
    return (
      <PaymentForm
        payments={list}
      />
    );
  }

}

Payment.propTypes = {
  list: PropTypes.array,
  getPayments: PropTypes.func,
};

export default connect(
  state => state.payment,
  { ...actions }
)(Payment);
