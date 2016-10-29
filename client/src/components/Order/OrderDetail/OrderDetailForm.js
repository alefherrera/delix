import React, { PropTypes } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';

const OrderDetailForm = ({ order }) => (
  <Card>
    <CardText>
      <CardTitle
        title={`Pedido ${order.id}`}
        subtitle={order.grupoDeMesas.nombre}
      />
      {JSON.stringify(order)}
    </CardText>
  </Card>
);

OrderDetailForm.propTypes = {
  order: PropTypes.object,
};

export default OrderDetailForm;
