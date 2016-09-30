import React, { PropTypes } from 'react';
import OrderAddForm from '../components/Order/OrderAddForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class OrderAdd extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick() {
    this.props.createOrder();
  }

  render() {
    return (
      <OrderAddForm
        onCreateClick={this.handleCreateClick}
      />
    );
  }

}

OrderAdd.propTypes = {
  createOrder: PropTypes.func,
};

export default connect(state => state.order, { ...actions })(OrderAdd);
