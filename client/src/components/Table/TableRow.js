import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';

const TableRow = ({ table, onClick, menu }) => (
  <ListItem
    disabled
    rightIconButton={menu}
    primaryText={
      <Grid onClick={onClick ? () => onClick(table) : null}>
        <Row>
          <Col xs>
            {table.capacidad}
          </Col>
        </Row>
      </Grid>
    }
  />
);

TableRow.propTypes = {
  table: PropTypes.object,
  onClick: PropTypes.func,
  menu: PropTypes.any,
};

export default TableRow;
