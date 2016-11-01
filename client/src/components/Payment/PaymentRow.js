import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';

const PaymentRow = ({ payment }) => (
  <Card>
    <CardText>
      <Grid>
        <Link to={`/generar_ticket_pago/${payment.id}`} target="_blank">
          <Row>
            <Col xs>
              {payment.pagoTipo.descripcion}
            </Col>
            <Col xs>
              {`$${payment.montoRecibido}`}
            </Col>
          </Row>
        </Link>
      </Grid>
    </CardText>
  </Card>
);

PaymentRow.propTypes = {
  payment: PropTypes.object,
};

export default PaymentRow;
