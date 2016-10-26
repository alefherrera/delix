import React, { PropTypes } from 'react';
import OrderLineAddForm from '../components/Order/OrderLine/OrderLineAddForm';
import * as actions from '../actions/order';
import { connect } from 'react-redux';

class OrderProductAdd extends React.Component {

  handleAdd = quantity => {
    const { selected, addOrderLineProduct } = this.props;
    addOrderLineProduct({
      ...selected,
      quantity,
    }, this.props.params);
  }

  render() {
    const { selected } = this.props;
    return (
      <OrderLineAddForm
        text={selected.descripcion}
        onSave={this.handleAdd}
      />
    );
  }

}

OrderProductAdd.propTypes = {
  params: PropTypes.object,
  selected: PropTypes.object,
  addOrderLineProduct: PropTypes.func,
};

export default connect(state => state.product, { ...actions })(OrderProductAdd);
