import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ProductRow = ({ product, onClick, disabled }) => (
  <Grid onClick={onClick ? () => onClick(product) : null}>
    <Row>
      <Col xs={9}>
        <ListItem
          disabled={disabled}
          primaryText={product.descripcion}
        />
      </Col>
      <Col xs={3}>
        <ListItem
          disabled={disabled}
          primaryText={`$${product.precio}`}
        />
      </Col>
    </Row>
  </Grid>
);

ProductRow.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ProductRow;
