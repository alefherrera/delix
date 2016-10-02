import React, { PropTypes } from 'react';
import ProductForm from '../components/Product/ProductForm';
import { connect } from 'react-redux';
import * as actions from '../actions/product';

class Product extends React.Component {

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const { list } = this.props;
    return (
      <ProductForm products={list} />
    );
  }

}

Product.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
};

export default connect(state => state.product, { ...actions })(Product);
