import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';

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
    <Link to={`${location.pathname}/add`}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

ProductForm.propTypes = {
  products: PropTypes.array,
};

export default ProductForm;
