import React, { PropTypes } from 'react';
import ProductAddForm from '../../components/Product/ProductAddForm';
import * as actions from '../../actions/product';
import { connect } from 'react-redux';

class ProductEdit extends React.Component {

  componentDidMount() {
    const { getProduct, params } = this.props;
    getProduct(params.productId);
  }

  render() {
    const { current, editProduct } = this.props;
    return (
      <ProductAddForm product={current} onSave={editProduct} />
    );
  }

}

ProductEdit.propTypes = {
  editProduct: PropTypes.func,
  getProduct: PropTypes.func,
  params: PropTypes.object,
  current: PropTypes.object,
};

export default connect(state => state.product, { ...actions })(ProductEdit);
