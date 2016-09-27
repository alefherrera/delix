import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';

const OrderForm = ({ onCreateClick }) => (
  <Card>
    <CardText>
      Order
    </CardText>
    <CardActions>
      <RaisedButton label="Create" onTouchTap={onCreateClick} />
    </CardActions>
  </Card>
);

OrderForm.propTypes = {
  onCreateClick: PropTypes.func,
};

export default OrderForm;
