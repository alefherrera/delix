import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderAddForm = ({ onCreateClick }) => (
  <Card>
    <CardText>
      Pedido Add
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <RaisedButton label="Platos/Productos" onTouchTap={onCreateClick} />
          </Col>
          <Col xs>
            <RaisedButton label="Promos" onTouchTap={onCreateClick} />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs>
            <RaisedButton label="Enviar" onTouchTap={onCreateClick} />
          </Col>
          <Col xs>
            <RaisedButton label="Cerrar" onTouchTap={onCreateClick} />
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderAddForm.propTypes = {
  onCreateClick: PropTypes.func,
};

export default OrderAddForm;
