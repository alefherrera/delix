import React, { PropTypes } from 'react';
import PaymentForm from '../../components/Payment/PaymentForm';

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

export default Payment;
