import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DishListForm from '../components/Order/DishListForm';
import * as actions from '../actions/dish';

class DishList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.props.getDishes();
  }

  handleSelect(promo) {
    this.props.setDish(promo);
  }

  handleFilter(filter) {
    this.props.filterDishes(filter);
  }

  render() {
    const { list } = this.props;
    return (
      <DishListForm
        dishes={list}
        onFilter={this.handleFilter}
        onSelect={this.handleSelect}
      />
    );
  }

}

DishList.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
  setDish: PropTypes.func,
  filterDishes: PropTypes.func,
};

export default connect(
  state => state.dish,
  { ...actions }
)(DishList);
