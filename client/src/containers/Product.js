import React, { PropTypes } from 'react';
import ProductForm from '../components/Product/ProductForm';
import { connect } from 'react-redux';
import * as actions from '../actions/product';
import { push } from 'react-router-redux';

class Product extends React.Component {

  componentWillMount() {
    this.props.getProducts(true);
  }

  render() {
    const { list, goEditProduct, deleteProduct } = this.props;
    return (
      <ProductForm
        products={list}
        editProduct={goEditProduct}
        deleteProduct={deleteProduct}
      />
    );
  }

}

Product.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
  goEditProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default connect(
  state => state.product,
  {
    ...actions,
    goEditProduct: id => push(`${location.pathname}/edit/${id}`),
  }
)(Product);
