import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TicketRow from './TicketRow';

const TicketForm = ({ tickets, onItemClick }) => (
  <Card>
    <CardTitle title="Tickets" />
    <CardText>
      {
        tickets.map((ticket, i) => (
          <TicketRow
            key={i}
            ticket={ticket}
            onClick={onItemClick}
          />
        ))
      }
    </CardText>
  </Card>
);

TicketForm.propTypes = {
  tickets: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default TicketForm;
