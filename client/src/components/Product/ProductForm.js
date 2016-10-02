import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const ProductForm = ({ products }) => (
  <Card>
    <CardText>
      <List>
        {
          products.map((product, i) => (
            <ListItem
              key={i}
              primaryText={product.descripcion}
            />
          ))
        }
      </List>
    </CardText>
  </Card>
);

ProductForm.propTypes = {
  products: PropTypes.array,
};

export default ProductForm;
