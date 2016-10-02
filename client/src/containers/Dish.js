import React, { PropTypes } from 'react';
import DishForm from '../components/Dish/DishForm';
import { connect } from 'react-redux';
import * as actions from '../actions/dish';

class Dish extends React.Component {

  componentWillMount() {
    this.props.getDishes();
  }

  render() {
    const { list } = this.props;
    return (
      <DishForm dishes={list} />
    );
  }

}

Dish.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
};

export default connect(state => state.dish, { ...actions })(Dish);
