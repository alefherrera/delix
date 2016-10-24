import React, { PropTypes } from 'react';
import OrderAddForm from '../components/Order/OrderAdd/OrderAddForm';
import { connect } from 'react-redux';
import * as actions from '../actions/order';

class OrderAdd extends React.Component {

  componentWillMount() {
    const { current, params, getOrder } = this.props;
    const { pedidoId, mesaId } = params;
    if (!current || current.id !== parseInt(pedidoId, 10)) {
      getOrder({ id: pedidoId, grupoDeMesasId: mesaId });
    }
  }

  handleSendOrderLines = () => {
    const { current } = this.props;
    this.props.sendOrderLines(current);
  }

  handleCloseOrder = () => {
    const { closeOrder, current } = this.props;
    closeOrder(current.id);
  }

  handlePromoStatusClick = promo => promo;

  handlePromoRemoveClick = promo => {
    this.props.deleteOrderLinePromo(promo);
  }

  handleProductStatusClick = product => product;

  handleProductRemoveClick = product => {
    this.props.deleteOrderLineProduct(product);
  }

  handleDishStatusClick = dish => dish;

  handleDishRemoveClick = dish => {
    this.props.deleteOrderLineDish(dish);
  }

  render() {
    const { current, location } = this.props;
    if (!current) return null;
    return (
      <OrderAddForm
        order={current}
        onSendOrderLines={this.handleSendOrderLines}
        onCloseOrder={this.handleCloseOrder}
        promoStatusClick={this.handlePromoStatusClick}
        promoRemoveClick={this.handlePromoRemoveClick}
        linkPromo={`${location.pathname}/comanda/promos`}
        productStatusClick={this.handleProductStatusClick}
        productRemoveClick={this.handleProductRemoveClick}
        linkProduct={`${location.pathname}/comanda/productos`}
        dishStatusClick={this.handleDishStatusClick}
        dishRemoveClick={this.handleDishRemoveClick}
        linkDish={`${location.pathname}/comanda/platos`}
      />
    );
  }

}

OrderAdd.propTypes = {
  location: PropTypes.object,
  sendOrderLines: PropTypes.func,
  closeOrder: PropTypes.func,
  current: PropTypes.object,
  getOrder: PropTypes.func,
  params: PropTypes.object,
  deleteOrderLinePromo: PropTypes.func,
  deleteOrderLineProduct: PropTypes.func,
  deleteOrderLineDish: PropTypes.func,
};

export default connect(state => state.order, { ...actions })(OrderAdd);
