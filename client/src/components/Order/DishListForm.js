import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

const DishListForm = ({ dishes }) => (
  <Card>
    <CardText>
      <AutoComplete
        hintText="Platos/Productos"
        dataSource={dishes}
      />
    </CardText>
  </Card>
);

DishListForm.propTypes = {
  dishes: PropTypes.array,
};

export default DishListForm;
