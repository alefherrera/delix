import React, { PropTypes } from 'react';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import TicketRow from '../../Ticket/TicketRow';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';

const OrderDetailForm = ({ ticket }) => (
  <Card>
    <CardText>
      <CardTitle title="Detalle" />
      <TicketRow ticket={ticket} />
    </CardText>
    <CardActions>
      <Grid>
        <Row center="xs">
          <Col xs>
            <Link to={`/generar_ticket/${ticket.id}`} target="_blank">
              <RaisedButton label="Imprimir" />
            </Link>
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderDetailForm.propTypes = {
  ticket: PropTypes.object,
};

export default OrderDetailForm;
