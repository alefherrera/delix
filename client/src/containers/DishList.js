import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DishListForm from '../components/Order/DishListForm';
import * as actions from '../actions/dish';

class DishList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.props.getDishes();
  }

  handleSelect(promo) {
    this.props.setDish(promo);
  }

  render() {
    const { list } = this.props;
    return (
      <DishListForm
        dishes={list}
        onSelect={this.handleSelect}
      />
    );
  }

}

DishList.propTypes = {
  list: PropTypes.array,
  getDishes: PropTypes.func,
  setDish: PropTypes.func,
};

export default connect(
  state => state.dish,
  { ...actions }
)(DishList);
