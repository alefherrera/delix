import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const DishListForm = ({ dishes, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <List>
        <Card>

          {
            dishes.map((dish, i) => (
              <div key={i}>
                <ListItem
                  primaryText={dish.nombre}
                  secondaryText={dish.descripcion}
                  onTouchTap={() => onSelect(dish)}
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
