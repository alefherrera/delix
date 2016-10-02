import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';

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
    <Link to={`${location.pathname}/add`}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

DishForm.propTypes = {
  dishes: PropTypes.array,
};

export default DishForm;
