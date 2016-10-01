import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';

const OrderAddForm = ({ addLink }) => (
  <Card>
    <CardText>
      Pedido Add
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <Link to={addLink}>
              <RaisedButton label="Agregar Comanda" />
            </Link>
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderAddForm.propTypes = {
  addLink: PropTypes.string,
};

export default OrderAddForm;
