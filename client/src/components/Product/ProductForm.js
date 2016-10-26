import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import ProductRow from './ProductRow';
import Divider from 'material-ui/Divider';
import rowMenu from '../rowMenu';

const ProductForm = ({ products, editProduct, deleteProduct, addLink }) => (
  <Card>
    <CardTitle title="Productos" />
    <CardText>
      <List>
        <Card>
          {
            products.map((product, i) => (
              <div key={i}>
                <ProductRow
                  disabled
                  product={product}
                  menu={
                    rowMenu(
                    () => editProduct(product.id),
                    () => deleteProduct(product.id))
                  }
                />
                <Divider />
              </div>
            ))
          }
        </Card>
      </List>
    </CardText>
    <Link to={addLink}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

ProductForm.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  addLink: PropTypes.string,
};

export default ProductForm;
