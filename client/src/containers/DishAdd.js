import React, { PropTypes } from 'react';
import DishAddForm from '../components/Dish/DishAddForm';
import * as actions from '../actions/dish';
import { connect } from 'react-redux';

class DishAdd extends React.Component {

  render() {
    return (
      <DishAddForm onSave={this.props.addDish} />
    );
  }

}

DishAdd.propTypes = {
  addDish: PropTypes.func,
};

export default connect(null, { ...actions })(DishAdd);
