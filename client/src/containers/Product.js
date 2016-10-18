import React, { PropTypes } from 'react';
import ProductForm from '../components/Product/ProductForm';
import { connect } from 'react-redux';
import * as actions from '../actions/product';

class Product extends React.Component {

  componentWillMount() {
    this.props.getProducts(true);
  }

  handleSelect = id => {
    this.props.history.push(`producto/edit/${id}`);
  }

  render() {
    const { list, deleteProduct } = this.props;
    return (
      <ProductForm
        products={list}
        editProduct={this.handleSelect}
        deleteProduct={deleteProduct}
        addLink={'producto/add'}
      />
    );
  }

}

Product.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
  deleteProduct: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  state => state.product,
  {
    ...actions
  }
)(Product);
