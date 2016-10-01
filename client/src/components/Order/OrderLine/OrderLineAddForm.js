import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class OrderLineAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleChange(e) {
    this.setState({ quantity: parseInt(e.target.value, 10) });
  }

  handleSave() {
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
                {text}
              </Col>
              <Col xs>
                <TextField
                  hintText="Cantidad"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Grid>
        </CardText>
        <CardActions>
          <Grid fluid>
            <Row>
              <Col xs>
                <RaisedButton onTouchTap={this.handleSave} />
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
