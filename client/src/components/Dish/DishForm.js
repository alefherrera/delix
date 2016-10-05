import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import DishRow from './DishRow';
import Divider from 'material-ui/Divider';

const DishForm = ({ dishes }) => (
  <Card>
    <CardText>
      <List>
        <Card>
          {
            dishes.map((dish, i) => (
              <div key={i}>
                <DishRow
                  dish={dish}
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

DishForm.propTypes = {
  dishes: PropTypes.array,
};

export default DishForm;
