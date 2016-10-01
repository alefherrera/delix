import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

const ProductListForm = ({ products }) => (
  <Card>
    <CardText>
      <AutoComplete
        hintText="Productos"
        dataSource={products}
      />
    </CardText>
  </Card>
);

ProductListForm.propTypes = {
  products: PropTypes.array,
};

export default ProductListForm;
