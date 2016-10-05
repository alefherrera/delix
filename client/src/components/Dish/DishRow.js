import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';

const DishRow = ({ dish, onClick, disabled }) => (
  <Grid onClick={onClick ? () => onClick(dish) : null}>
    <Row>
      <Col xs={9}>
        <ListItem
          disabled={disabled}
          primaryText={dish.nombre}
          secondaryText={dish.descripcion}
        />
      </Col>
      <Col xs={3}>
        <ListItem
          disabled={disabled}
          primaryText={`$${dish.precio}`}
        />
      </Col>
    </Row>
  </Grid>
);

DishRow.propTypes = {
  dish: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default DishRow;
