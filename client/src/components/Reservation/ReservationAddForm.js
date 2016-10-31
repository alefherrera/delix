import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

class ReservationAddForm extends React.Component {

  state = {
    timeZone: null,
    table: null,
    date: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reservation) {
      this.setState(nextProps.reservation);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  handleTimeZoneChange = (e, i, timeZone) => {
    this.setState({ timeZone, franjaId: timeZone.id });
  }

  handleTableChange = (e, i, table) => {
    this.setState({ table, grupoDeMesasId: table.id });
  }

  handleDatePickerChange = (nil, date) => {
    this.setState({ date, fecha: date });
  }

  render() {
    const { timeZones, tables } = this.props;
    return (
      <Card>
        <CardTitle title="Reserva" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs>
                  <SelectField
                    floatingLabelText="Franja"
                    value={this.state.timeZone}
                    onChange={this.handleTimeZoneChange}
                  >
                    {
                      timeZones && timeZones.map((timeZone, i) => (
                        <MenuItem
                          key={i}
                          value={timeZone}
                          primaryText={timeZone.nombre}
                        />
                      ))
                    }
                  </SelectField>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <SelectField
                    floatingLabelText="Mesa"
                    value={this.state.table}
                    onChange={this.handleTableChange}
                  >
                    {
                      tables && tables.map((table, i) => (
                        <MenuItem
                          key={i}
                          value={table}
                          primaryText={table.nombre}
                        />
                      ))
                    }
                  </SelectField>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <DatePicker
                    hintText="Fecha"
                    value={this.state.date}
                    onChange={this.handleDatePickerChange}
                  />
                </Col>
              </Row>
            </Grid>
          </CardText>
          <CardActions>
            <Grid fluid>
              <Row center="xs">
                <Col xs>
                  <RaisedButton type="submit" label="Guardar" />
                </Col>
              </Row>
            </Grid>
          </CardActions>
        </form>
      </Card>
    );
  }

}

ReservationAddForm.propTypes = {
  reservation: PropTypes.object,
  timeZones: PropTypes.array,
  tables: PropTypes.array,
  onSave: PropTypes.func,
};

export default ReservationAddForm;
