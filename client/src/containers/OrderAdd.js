import React, { PropTypes } from 'react';
import OrderAddForm from '../components/Order/OrderAdd/OrderAddForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class OrderAdd extends React.Component {

  componentWillMount() {
    // if (!this.props.current) {
    const { pedidoId, mesaId } = this.props.params;
    this.props.getOrder({ id: pedidoId, grupoDeMesasId: mesaId });
    // }
  }

  handleSendOrderLines = () => {
    const { promos, products, dishes, current } = this.props;
    this.props.sendOrderLines({
      promos, products, dishes, current,
    });
  }

  handleCloseOrder = () => {
    const { closeOrder, current } = this.props;
    closeOrder(current.id);
  }

  render() {
    const { current, location, promos, products, dishes } = this.props;
    if (!current) return null;
    return (
      <OrderAddForm
        order={current}
        promos={promos}
        products={products}
        dishes={dishes}
        onSendOrderLines={this.handleSendOrderLines}
        onCloseOrder={this.handleCloseOrder}
        linkPromo={`${location.pathname}/comanda/promos`}
        linkProduct={`${location.pathname}/comanda/productos`}
        linkDish={`${location.pathname}/comanda/platos`}
      />
    );
  }

}

OrderAdd.propTypes = {
  location: PropTypes.object,
  promos: PropTypes.array,
  products: PropTypes.array,
  dishes: PropTypes.array,
  sendOrderLines: PropTypes.func,
  closeOrder: PropTypes.func,
  current: PropTypes.object,
  getOrder: PropTypes.func,
  params: PropTypes.object,
};

export default connect(state => state.order, { ...actions })(OrderAdd);
