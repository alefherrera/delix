import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PaymentRow = ({ payment }) => (
  <Card>
    <CardText>
      <Grid>
        <Row>
          <Col xs>
            {payment.pagoTipo.descripcion}
          </Col>
          <Col xs>
            {`$${payment.montoRecibido}`}
          </Col>
        </Row>
      </Grid>
    </CardText>
  </Card>
);

PaymentRow.propTypes = {
  payment: PropTypes.object,
};

export default PaymentRow;
