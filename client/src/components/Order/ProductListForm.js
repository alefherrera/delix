import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
const ProductListForm = ({ products, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <List>
        <Card>
          {
            products.map((product, i) => (
              <div key={i}>
                <ListItem
                  primaryText={product.descripcion}
                  onTouchTap={() => onSelect(product)}
                />
                <Divider />
              </div>
            ))
          }
        </Card>
      </List>
    </CardText>
  </Card>
);

ProductListForm.propTypes = {
  products: PropTypes.array,
  onSelect: PropTypes.func,
  onFilter: PropTypes.func,
};

export default ProductListForm;
