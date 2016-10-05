import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import ProductRow from './ProductRow';
import Divider from 'material-ui/Divider';

const ProductForm = ({ products }) => (
  <Card>
    <CardText>
      <List>
        <Card>
          {
            products.map((product, i) => (
              <Link key={i} to={`${location.pathname}/edit/${product.id}`}>
                <ProductRow
                  product={product}
                />
                <Divider />
              </Link>
            ))
          }
        </Card>
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
