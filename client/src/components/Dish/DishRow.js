import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

const DishRow = ({ dish, onClick, disabled }) => (
  <ListItem
    disabled={disabled}
    onTouchTap={() => onClick(dish)}
    primaryText={dish.nombre}
    secondaryText={dish.descripcion}
  />
);

DishRow.propTypes = {
  dish: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default DishRow;
