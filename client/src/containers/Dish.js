import React, { PropTypes } from 'react';
import DishForm from '../components/Dish/DishForm';
import { connect } from 'react-redux';
import * as actions from '../actions/dish';

class Dish extends React.Component {

  componentWillMount() {
    this.props.getDishes();
  }

  render() {
    const { list, editDish, deleteDish } = this.props;
    return (
      <DishForm
        dishes={list}
        editDish={editDish}
        deleteDish={deleteDish}
      />
    );
  }

}

Dish.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
  editDish: PropTypes.func,
  deleteDish: PropTypes.func,
};

export default connect(state => state.dish, { ...actions })(Dish);
