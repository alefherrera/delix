import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderForm = ({ onCreateClick }) => (
  <Card>
    <CardText>
      Pedido
    </CardText>
    <CardActions>
      <Grid>
        <Row center="xs">
          <Col xs>
            <RaisedButton label="Create" onTouchTap={onCreateClick} />
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderForm.propTypes = {
  onCreateClick: PropTypes.func,
};

export default OrderForm;
