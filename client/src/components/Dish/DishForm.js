import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import DishRow from './DishRow';
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

const rightIconMenu = (editFunc, deleteFunc) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onTouchTap={editFunc}>Edit</MenuItem>
    <MenuItem onTouchTap={deleteFunc}>Delete</MenuItem>
  </IconMenu>
);

const DishForm = ({ dishes, editDish, deleteDish }) => (
  <Card>
    <CardTitle title="Platos" />
    <CardText>
      <List>
        <Card>
          {
            dishes.map((dish, i) => (
              <div key={i}>
                <DishRow
                  dish={dish}
                  rightIconButton={
                    rightIconMenu(
                    () => editDish(dish.id),
                    () => deleteDish(dish.id)
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

DishForm.propTypes = {
  dishes: PropTypes.array,
  editDish: PropTypes.func,
  deleteDish: PropTypes.func,
};

export default DishForm;
