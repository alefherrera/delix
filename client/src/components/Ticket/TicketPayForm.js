import React, { PropTypes } from 'react';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class TicketPayForm extends React.Component {

  state = {
    pagoTipoId: null,
    montoRecibido: 0,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  handlePaymentTypeChange = (e, i, pagoTipoId) => {
    this.setState({ pagoTipoId });
  }

  render() {
    const { paymentTypes, total } = this.props;
    return (
      <Card>
        <CardTitle title="Pago" subtitle={total} />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs>
                  <SelectField
                    floatingLabelText="Forma de pago"
                    value={this.state.pagoTipoId}
                    onChange={this.handlePaymentTypeChange}
                  >
                    {
                      paymentTypes && paymentTypes.map((paymentType, i) => (
                        <MenuItem
                          key={i}
                          value={paymentType.id}
                          primaryText={paymentType.descripcion}
                        />
                      ))
                    }
                  </SelectField>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <TextField
                    type="number"
                    min="0"
                    floatingLabelText="Monto"
                    value={this.state.montoRecibido}
                    onChange={e => this.setState({ montoRecibido: parseInt(e.target.value, 10) })}
                  />
                </Col>
              </Row>
            </Grid>
          </CardText>
          <CardActions>
            <Grid fluid>
              <Row center="xs">
                <Col xs>
                  <RaisedButton
                    type="submit"
                    label="Pagar"
                  />
                </Col>
              </Row>
            </Grid>
          </CardActions>
        </form>
      </Card>
    );
  }

}

TicketPayForm.propTypes = {
  paymentTypes: PropTypes.array,
  total: PropTypes.number,
  onSave: PropTypes.func,
};

export default TicketPayForm;
