import React, { PropTypes } from 'react';
import PromoAddForm from '../components/Promo/PromoAddForm';
import * as actions from '../actions/promo';
import * as dishActions from '../actions/dish';
import * as productActions from '../actions/product';
import { connect } from 'react-redux';

class PromoEdit extends React.Component {

  componentWillMount() {
    const { getPromo, params, getDishes, getProducts } = this.props;
    getDishes();
    getProducts();
    getPromo(params.promoId);
  }

  render() {
    const { current, editPromo, dishes, products } = this.props;

    return (
      <PromoAddForm
        promo={current}
        onSave={editPromo}
        dishes={dishes}
        products={products}
      />
    );
  }

}

PromoEdit.propTypes = {
  dishes: PropTypes.array,
  products: PropTypes.array,
  editPromo: PropTypes.func,
  getPromo: PropTypes.func,
  getDishes: PropTypes.func,
  getProducts: PropTypes.func,
  params: PropTypes.object,
  current: PropTypes.object,
};

export default connect(
  state => ({
    ...state.promo,
    dishes: state.dish.list,
    products: state.product.list,
  }),
  {
    ...actions,
    getDishes: dishActions.getDishes,
    getProducts: productActions.getProducts,
  }
)(PromoEdit);
