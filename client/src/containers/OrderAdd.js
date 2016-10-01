import React, { PropTypes } from 'react';
import OrderAddForm from '../components/Order/OrderAddForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

const OrderAdd = ({ location, children }) => (
  <div>
    <OrderAddForm
      addLink={`${location.pathname}/comanda`}
    />
    <div>
      {
        children
      }
    </div>
  </div>
);

OrderAdd.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
};

export default connect(state => state.order, { ...actions })(OrderAdd);
