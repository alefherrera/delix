import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ProductRow = ({ product, onClick, disabled }) => (
  <ListItem disabled={disabled} innerDivStyle={{ padding: 'initial' }}>
    <Grid onClick={onClick ? () => onClick(product) : null}>
      <Row>
        <Col xs={9}>
          <ListItem
            disabled
            primaryText={product.descripcion}
          />
        </Col>
        <Col xs={3}>
          <ListItem
            disabled
            primaryText={`$${product.precio}`}
          />
        </Col>
      </Row>
    </Grid>
  </ListItem>
);

ProductRow.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ProductRow;
