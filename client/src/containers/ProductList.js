import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductListForm from '../components/Order/ProductListForm';
import * as actions from '../actions/promo';

class PromoList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.props.getProducts();
  }

  handleSelect(promo) {
    this.props.setProduct(promo);
  }

  render() {
    const { products } = this.props;
    return (
      <ProductListForm
        products={products}
        onSelect={this.handleSelect}
      />
    );
  }

}

PromoList.propTypes = {
  products: PropTypes.array,
  getProducts: PropTypes.func,
  setProduct: PropTypes.func,
};

export default connect(
  state => state.promos,
  { ...actions }
)(PromoList);
