import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const SectorDetail = ({ tables, onSelect }) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Capacidad</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {
        tables.map((table, i) => (
          <TableRow key={i} onTouchTap={() => onSelect(table.id)}>
            <TableRowColumn>{table.nombre}</TableRowColumn>
            <TableRowColumn>{table.capacidad}</TableRowColumn>
            <TableRowColumn>
              {table.grupoDeMesasEstado.descripcion}
            </TableRowColumn>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);

SectorDetail.propTypes = {
  tables: PropTypes.array,
  onSelect: PropTypes.func,
};

export default SectorDetail;
