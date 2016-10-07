import React, { PropTypes } from 'react';
import DishForm from '../components/Dish/DishForm';
import { connect } from 'react-redux';
import * as actions from '../actions/dish';
import { push } from 'react-router-redux';

class Dish extends React.Component {

  componentWillMount() {
    this.props.getDishes();
  }

  render() {
    const { list, goEditDish, deleteDish } = this.props;
    return (
      <DishForm
        dishes={list}
        editDish={goEditDish}
        deleteDish={deleteDish}
      />
    );
  }

}

Dish.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
  goEditDish: PropTypes.func,
  deleteDish: PropTypes.func,
};

export default connect(
  state => state.dish,
  {
    ...actions,
    goEditDish: id => push(`${location.pathname}/edit/${id}`),
  })(Dish);
