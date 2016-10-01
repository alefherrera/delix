import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductListForm from '../components/Order/ProductListForm';
import * as actions from '../actions/product';

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
    const { list } = this.props;
    return (
      <ProductListForm
        products={list.map(s => s.descripcion)}
        onSelect={this.handleSelect}
      />
    );
  }

}

PromoList.propTypes = {
  list: PropTypes.array,
  getProducts: PropTypes.func,
  setProduct: PropTypes.func,
};

export default connect(
  state => state.product,
  { ...actions }
)(PromoList);
