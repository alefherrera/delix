import React, { PropTypes } from 'react';
import CommandViewerOrder from './CommandViewerOrder';
import { Card, CardText } from 'material-ui/Card';

const CommandViewerForm = ({ orders }) => (
  <Card>
    <CardText>
      {
        orders.map((order, i) => (
          <CommandViewerOrder
            key={i}
            title={order.grupoDeMesas.nombre}
            time={order.createdAt}
            commands={order.comandas}
          />
        ))
      }
    </CardText>
  </Card>
);

CommandViewerForm.propTypes = {
  orders: PropTypes.array,
};

export default CommandViewerForm;
