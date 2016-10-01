import React, { PropTypes } from 'react';
import OrderLineAddForm from '../components/Order/OrderLine/OrderLineAddForm';
import * as actions from '../actions/order';
import { connect } from 'react-redux';

class ProductAdd extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(quantity) {
    const { selected, addOrderLineProduct } = this.props;
    addOrderLineProduct({
      id: selected.id,
      quantity,
    });
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

ProductAdd.propTypes = {
  selected: PropTypes.object,
  addOrderLineProduct: PropTypes.func,
};

export default connect(state => state.product, { ...actions })(ProductAdd);
