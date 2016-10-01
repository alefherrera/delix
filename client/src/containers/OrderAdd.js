import React, { PropTypes } from 'react';
import OrderAddForm from '../components/Order/OrderAddForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class OrderAdd extends React.Component {

  constructor(props) {
    super(props);
    this.handleCloseOrder = this.handleCloseOrder.bind(this);
  }

  handleCloseOrder() {
    const { promos, products, dishes, current } = this.props;
    this.props.closeOrder({
      promos, products, dishes, current,
    });
  }

  render() {
    const { location, promos, products, dishes } = this.props;
    return (
      <OrderAddForm
        addLink={`${location.pathname}/comanda`}
        promos={promos}
        products={products}
        dishes={dishes}
        onCloseOrder={this.handleCloseOrder}
      />
    );
  }

}

OrderAdd.propTypes = {
  location: PropTypes.object,
  promos: PropTypes.array,
  products: PropTypes.array,
  dishes: PropTypes.array,
  closeOrder: PropTypes.func,
  current: PropTypes.object,
};

export default connect(state => state.order, { ...actions })(OrderAdd);
