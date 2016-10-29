import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TimePicker from 'material-ui/TimePicker';

class TimeZoneAddForm extends React.Component {

  state = {
    horaInicio: null,
    horaFin: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timeZone) {
      const { timeZone } = nextProps;
      const horaInicio = new Date(timeZone.horaInicio);
      const horaFin = new Date(timeZone.horaFin);
      this.setState({ ...timeZone, horaInicio, horaFin });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { horaInicio, horaFin } = this.state;
    return (
      <Card>
        <CardTitle title="Franja" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row center="xs">
                <Col xs>
                  <TimePicker
                    format="24hr"
                    hintText="Hora inicio"
                    value={horaInicio}
                    onChange={(e, v) => this.setState({ horaInicio: v })}
                  />
                </Col>
              </Row>
              <Row center="xs">
                <Col xs>
                  <TimePicker
                    format="24hr"
                    hintText="Hora Fin"
                    value={horaFin}
                    onChange={(e, v) => this.setState({ horaFin: v })}
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

TimeZoneAddForm.propTypes = {
  timeZone: PropTypes.object,
  onSave: PropTypes.func,
};

export default TimeZoneAddForm;
