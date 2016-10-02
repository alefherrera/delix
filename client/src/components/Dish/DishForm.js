import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const DishForm = ({ dishes }) => (
  <Card>
    <CardText>
      <List>
        {
          dishes.map((dish, i) => (
            <ListItem
              key={i}
              primaryText={dish.nombre}
            />
          ))
        }
      </List>
    </CardText>
  </Card>
);

DishForm.propTypes = {
  dishes: PropTypes.array,
};

export default DishForm;
