import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List, ListItem } from 'material-ui/List';

const OrderForm = ({ orders, onCreateClick }) => (
  <Card>
    <CardText>
      Pedido
    </CardText>
    <CardText>
      <Grid>
        {
          orders.map((order, i) => (
            <ListItem
              key={i}
              primaryText={order.id}
            />
          ))
        }
      </Grid>
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
