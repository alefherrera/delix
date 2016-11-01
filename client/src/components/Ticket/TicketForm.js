import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const TicketForm = ({ tickets }) => (
  <Card>
    <CardTitle title="Tickets" />
    <CardText>
      <List>
        {
          tickets.map((ticket, i) => (
            <ListItem
              key={i}
              primaryText="Ticket"
            />
          ))
        }
      </List>
    </CardText>
  </Card>
);

TicketForm.propTypes = {
  tickets: PropTypes.array,
};

export default TicketForm;
