import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

const ProductRow = ({ product, onClick, disabled }) => (
  <ListItem
    disabled={disabled}
    onTouchTap={() => onClick(product)}
    primaryText={product.descripcion}
  />
);

ProductRow.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ProductRow;
