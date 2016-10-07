import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import ProductRow from './ProductRow';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="Opciones"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon />
  </IconButton>
);

const rightIconMenu = (editProduct, deleteProduct) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onTouchTap={editProduct}>Edit</MenuItem>
    <MenuItem onTouchTap={deleteProduct}>Delete</MenuItem>
  </IconMenu>
);

const ProductForm = ({ products, editProduct, deleteProduct }) => (
  <Card>
    <CardTitle title="Productos" />
    <CardText>
      <List>
        <Card>
          {
            products.map((product, i) => (
              <div key={i}>
                <ProductRow
                  product={product}
                  rightIconButton={
                    rightIconMenu(
                    () => editProduct(product.id),
                    () => deleteProduct(product.id)
                    )
                  }
                />
                <Divider />
              </div>
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
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ProductForm;
