import React, { PropTypes } from 'react';
import ProductForm from '../components/Product/ProductForm';
import { connect } from 'react-redux';
import * as actions from '../actions/product';

class Product extends React.Component {

  componentWillMount() {
    this.props.getProducts(true);
  }

  render() {
    const { list, editProduct, deleteProduct } = this.props;
    return (
      <ProductForm
        products={list}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    );
  }

}

Product.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default connect(
  state => state.product,
  { ...actions }
)(Product);
