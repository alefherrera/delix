import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import IconButton from 'material-ui/IconButton';
const OrderLineListItem = ({ items, getPrimary, getSecondary }) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Cantidad</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {
        items && items.map((item, i) => (
          <TableRow key={i}>
            <TableRowColumn>{getPrimary(item)}</TableRowColumn>
            <TableRowColumn>{getSecondary(item)}</TableRowColumn>
            <TableRowColumn>
              <IconButton>
                <Restaurant />
              </IconButton>
            </TableRowColumn>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);

OrderLineListItem.propTypes = {
  saved: PropTypes.array,
  items: PropTypes.array,
  getPrimary: PropTypes.func,
  getSecondary: PropTypes.func,
};

export default OrderLineListItem;
