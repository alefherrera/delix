import React, { PropTypes } from 'react';
import OrderLineAddForm from '../components/Order/OrderLine/OrderLineAddForm';
import * as actions from '../actions/order';
import { connect } from 'react-redux';

class OrderPromoAdd extends React.Component {

  handleAdd = state => {
    const { selected, addOrderLinePromo } = this.props;
    addOrderLinePromo({
      ...selected,
      ...state,
    }, this.props.params);
  }

  render() {
    const { selected } = this.props;
    return (
      <OrderLineAddForm
        text={selected.nombre}
        onSave={this.handleAdd}
      />
    );
  }

}

OrderPromoAdd.propTypes = {
  params: PropTypes.object,
  selected: PropTypes.object,
  addOrderLinePromo: PropTypes.func,
};

export default connect(state => state.promo, { ...actions })(OrderPromoAdd);
