import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DishRow from '../Dish/DishRow';

const DishListForm = ({ dishes, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <List>
        <Card>
          {
            dishes.map((dish, i) => (
              <div key={i}>
                <DishRow
                  dish={dish}
                  onClick={onSelect}
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

DishListForm.propTypes = {
  dishes: PropTypes.array,
  onSelect: PropTypes.func,
  onFilter: PropTypes.func,
};

export default DishListForm;
