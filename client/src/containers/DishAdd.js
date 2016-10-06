import React, { PropTypes } from 'react';
import DishAddForm from '../components/Dish/DishAddForm';
import * as actions from '../actions/dish';
import { connect } from 'react-redux';

const DishAdd = ({ addDish }) => (
  <DishAddForm onSave={addDish} />
);

DishAdd.propTypes = {
  addDish: PropTypes.func,
};

export default connect(null, { ...actions })(DishAdd);
