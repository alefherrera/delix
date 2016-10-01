import React, { PropTypes } from 'react';
import OrderLineAddForm from '../components/Order/OrderLine/OrderLineAddForm';
import * as actions from '../actions/order';
import { connect } from 'react-redux';

class DishAdd extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(quantity) {
    const { selected, addOrderLineDish } = this.props;
    addOrderLineDish({
      selected,
      quantity,
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

DishAdd.propTypes = {
  params: PropTypes.object,
  selected: PropTypes.object,
  addOrderLineDish: PropTypes.func,
};

export default connect(state => state.dish, { ...actions })(DishAdd);
