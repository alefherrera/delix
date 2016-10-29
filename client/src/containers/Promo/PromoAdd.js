import React, { PropTypes } from 'react';
import PromoAddForm from '../../components/Promo/PromoAddForm';
import * as actions from '../../actions/promo';
import * as dishActions from '../../actions/dish';
import * as productActions from '../../actions/product';
import { connect } from 'react-redux';

class PromoAdd extends React.Component {

  componentDidMount() {
    const { getDishes, getProducts } = this.props;
    getDishes();
    getProducts();
  }

  render() {
    const { addPromo, dishes, products } = this.props;
    return (
      <PromoAddForm
        onSave={addPromo}
        dishes={dishes}
        products={products}
      />
    );
  }

}

PromoAdd.propTypes = {
  dishes: PropTypes.array,
  products: PropTypes.array,
  addPromo: PropTypes.func,
  getDishes: PropTypes.func,
  getProducts: PropTypes.func,
};

export default connect(
  state => ({
    dishes: state.dish.list,
    products: state.product.list,
  }),
  {
    ...actions,
    getDishes: dishActions.getDishes,
    getProducts: productActions.getProducts,
  }
)(PromoAdd);
