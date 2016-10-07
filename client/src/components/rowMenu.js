import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const RowMenu = (editFunc, deleteFunc) => (
  <IconMenu
    iconButtonElement={
      <IconButton
        touch
        tooltip="Opciones"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon />
      </IconButton>
    }
  >
    <MenuItem onTouchTap={editFunc}>Edit</MenuItem>
    <MenuItem onTouchTap={deleteFunc}>Delete</MenuItem>
  </IconMenu>
);

export default RowMenu;
