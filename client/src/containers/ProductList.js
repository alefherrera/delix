import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductListForm from '../components/Order/ProductListForm';
import * as actions from '../actions/product';

class PromoList extends React.Component {

  componentWillMount() {
    this.props.getProducts();
  }

  handleSelect = promo => {
    this.props.setProduct(promo);
  }

  handleFilter = filter => {
    this.props.filterProducts(filter);
  }

  render() {
    const { list } = this.props;
    return (
      <ProductListForm
        products={list}
        onFilter={this.handleFilter}
        onSelect={this.handleSelect}
      />
    );
  }

}

PromoList.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
  setProduct: PropTypes.func,
  filterProducts: PropTypes.func,
};

export default connect(
  state => state.product,
  { ...actions }
)(PromoList);
