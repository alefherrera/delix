import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SettingForm extends React.Component {

  state = {
    hostname: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveSetting(this.state.hostname);
  }

  render() {
    const { hostname } = this.state;
    return (
      <Card>
        <CardTitle title="Producto" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs>
                  <TextField
                    floatingLabelText="Host"
                    value={hostname}
                    onChange={e => this.setState({ hostname: e.target.value })}
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

SettingForm.propTypes = {
  saveSetting: PropTypes.func,
};

export default SettingForm;
