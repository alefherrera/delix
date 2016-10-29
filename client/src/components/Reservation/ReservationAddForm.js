import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

class ReservationAddForm extends React.Component {

  state = {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timeZone) {
      this.setState(nextProps.reservation);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    return (
      <Card>
        <CardTitle title="Franja" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            aa
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
  onSave: PropTypes.func,
};

export default ReservationAddForm;
