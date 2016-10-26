import React, { PropTypes } from 'react';
import DishForm from '../components/Dish/DishForm';
import { connect } from 'react-redux';
import * as actions from '../actions/dish';
import { push } from 'react-router-redux';

class Dish extends React.Component {

  componentWillMount() {
    this.props.getDishes();
  }

  handleSelect = id => {
    this.props.history.push(`plato/edit/${id}`);
  }

  render() {
    const { list, deleteDish } = this.props;
    return (
      <DishForm
        dishes={list}
        editDish={this.handleSelect}
        deleteDish={deleteDish}
        addLink={'plato/add'}
      />
    );
  }

}

Dish.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
  deleteDish: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  state => state.dish,
  {
    ...actions,
    goEditDish: id => push(`plato/edit/${id}`),
  })(Dish);
