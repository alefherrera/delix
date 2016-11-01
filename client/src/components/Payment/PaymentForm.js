import React, { PropTypes } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import PaymentRow from './PaymentRow';

const PaymentForm = ({ payments }) => (
  <Card>
    <CardTitle title="Pagos" />
    <CardText>
      {
        payments && payments.map((payment, i) => (
          <PaymentRow
            key={i}
            payment={payment}
          />
        ))
      }
    </CardText>
  </Card>
);

PaymentForm.propTypes = {
  payments: PropTypes.array,
};

export default PaymentForm;
