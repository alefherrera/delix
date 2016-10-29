import React, { PropTypes } from 'react';
import DishAddForm from '../../components/Dish/DishAddForm';
import * as actions from '../../actions/dish';
import { connect } from 'react-redux';

class DishEdit extends React.Component {

  componentDidMount() {
    const { getDish, params } = this.props;
    getDish(params.dishId);
  }

  render() {
    const { current, editDish } = this.props;

    return (
      <DishAddForm dish={current} onSave={editDish} />
    );
  }

}

DishEdit.propTypes = {
  editDish: PropTypes.func,
  getDish: PropTypes.func,
  params: PropTypes.object,
  current: PropTypes.object,
};

export default connect(state => state.dish, { ...actions })(DishEdit);
