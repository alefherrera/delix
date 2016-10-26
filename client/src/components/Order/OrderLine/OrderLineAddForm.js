import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class OrderLineAddForm extends React.Component {

  state = {
    quantity: 0,
  };

  handleChange = e => {
    const quantity = parseInt(e.target.value || 0, 10);
    this.setState({ quantity });
  }

  handleSave = () => {
    this.props.onSave(this.state.quantity);
  }

  render() {
    const { text } = this.props;
    return (
      <Card>
        <CardText>
          <Grid fluid>
            <Row>
              <Col xs>
                <CardText>
                  {text}
                </CardText>
              </Col>
              <Col xs>
                <TextField
                  type="number"
                  min="0"
                  floatingLabelText="Cantidad"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Grid>
        </CardText>
        <CardActions>
          <Grid fluid>
            <Row center="xs">
              <Col xs>
                <RaisedButton label="Agregar" onTouchTap={this.handleSave} />
              </Col>
            </Row>
          </Grid>
        </CardActions>
      </Card>
  );
  }

}

OrderLineAddForm.propTypes = {
  text: PropTypes.string,
  onSave: PropTypes.func,
};

export default OrderLineAddForm;
