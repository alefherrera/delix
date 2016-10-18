import React, { PropTypes } from 'react';
import CommandViewerItem from './CommandViewerItem';
import { Card, CardText } from 'material-ui/Card';

const CommandViewerForm = ({ orders }) => (
  <Card>
    <CardText>
      {
        orders.map((order, i) => (
          <CommandViewerItem
            key={i}
            order={order}
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
